import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/homeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">Category news <span className="text-accent">{categoryNews.length}</span></h2>
      <div className="px-10 py-6">
        {
            categoryNews.map(news =>  <NewsCard news={news} key={news.id}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
