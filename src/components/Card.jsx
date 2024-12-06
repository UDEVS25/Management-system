
import PropTypes from "prop-types";

const Card = ({ title, value, bgColor, icon }) => {
  return (
    <div
      className={`${bgColor} text-white rounded-lg p-6 shadow flex flex-col items-start justify-center`}
    >
      <div className="flex items-center justify-between w-full">
        {icon && <div className="text-3xl">{icon}</div>}
        <h3 className="text-lg font-bold">{value}</h3>
      </div>
      <p className="mt-2">{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bgColor: PropTypes.string,
  icon: PropTypes.element,
};

Card.defaultProps = {
  bgColor: "bg-gray-500",
  icon: null,
};

export default Card;
