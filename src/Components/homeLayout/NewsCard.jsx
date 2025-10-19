import { FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    id,
  } = news;

  // Format the date nicely
  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100  shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-8">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 pt-3 bg-base-200 py-2">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
       {/* Share icon */}
        <button className="btn btn-ghost btn-xs text-gray-600 hover:text-blue-500">
            <IoBookmarkOutline size={20} />
          <FaShareAlt size={20} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-2">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl object-cover h-48 w-full"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3">
        <p className="text-sm text-gray-600 line-clamp-3">{details}</p>
        <Link to={`/news-details/${id}`} className="text-blue-500 font-medium mt-1 hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between items-center px-4 py-3 border-t border-gray-300 mt-3">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({length: rating.number}).map((_,i) => (
            <FaStar key={i}></FaStar>
          ))}
          <span className="ml-2 text-gray-600">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
