import PropTypes from "prop-types";
import MediaCard from "../card/index";

function MediaGrid({ type, items }) {
  if (!items?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">
          No {type.toLowerCase()}s found. Add your first {type.toLowerCase()}!
        </p>
      </div>
    );
  }

  return (
    <div
      className="mb-8 grid grid-cols-4 gap-2 lg:grid-cols-5"
      role="grid"
      aria-label={`${type} grid`}
    >
      {items.map((item) => (
        <MediaCard key={item.id} type={type} item={item} />
      ))}
    </div>
  );
}

MediaGrid.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default MediaGrid;
