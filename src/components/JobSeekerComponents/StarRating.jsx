import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ size, color, starRating }) => {
  const maxStars = 5;

  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, index) => (
        index < starRating ? (
          <FaStar key={index} size={size} color={color} />
        ) : (
          <FaRegStar key={index} size={size} color={color} />
        )
      ))}
    </div>
  );
};

export default StarRating;
