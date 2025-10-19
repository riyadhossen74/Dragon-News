import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsPage from './NewsDetailsPage';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
//   console.log(data, id, news);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
    return (
        <div>
           <header className='py-3'>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
            <section className='col-span-9'>
                <h2 className='text-2xl font-bold'>News Details</h2>
                <NewsDetailsPage news={news}></NewsDetailsPage>
            </section>
            <aside className='col-span-3'>
                
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;