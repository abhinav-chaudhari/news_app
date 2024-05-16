import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

// let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.VITE_API_KEY}`;

//         const data = await fetch(url);
//         const json = await data.json();
//         setArticles(json.articles)

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const json = await data.json();
    setArticles(json.articles);
  };
  useEffect(() => {
    getNews();
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Lastest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
