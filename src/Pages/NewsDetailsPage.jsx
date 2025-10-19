import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const NewsDetailsPage = ({news}) => {
    // console.log(news)
  return <div className="space-y-10 p-10 shadow my-10">
    <img className="w-full h-[350px] object-cover" src={news.image_url} alt="" />
    <h2 className="text-3xl">{news.title}</h2>
    <p>{news.details}</p>
    <Link to={`/category/${news.category_id}`} className="btn btn-secondary"><FaArrowLeftLong />All news in this category</Link>
  </div>;
};

export default NewsDetailsPage;
