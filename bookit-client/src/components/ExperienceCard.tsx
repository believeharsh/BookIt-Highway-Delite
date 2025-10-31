import { Link } from "react-router-dom";
import { type Experience } from "../store/types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Link
      to={`/experience/${experience._id}`}
      className="block group max-w-sm"
    >
      <div
        className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden 
                   flex flex-col justify-between min-h-[440px] max-h-[440px]"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden h-48">
          <img
            src={experience.images[0]}
            alt={experience.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1 p-5 bg-gray-50">
          {/* Title and Location Row */}
          <div className="flex items-start justify-between mb-3">
            <h3
              className="text-lg font-semibold text-gray-900 leading-snug line-clamp-1"
              title={experience.title}
            >
              {experience.title}
            </h3>
            <span className="text-sm text-gray-700 bg-gray-200 rounded-md px-3 py-1 whitespace-nowrap">
              {experience.location.city}
            </span>
          </div>

          {/* Description */}
          <p
            className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2"
            title={experience.description}
          >
            {experience.description}
          </p>

          {/* Price and CTA Row */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200">
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-gray-600">From</span>
              <span className="text-xl font-bold text-gray-900">
                ₹{experience.price}
              </span>
            </div>
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg 
                         transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
