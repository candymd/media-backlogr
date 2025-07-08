import PropTypes from "prop-types";
import { MEDIA_TYPES } from "../../../../domain/config/index";

function MediaCard({ type, item }) {
  if (type !== MEDIA_TYPES.MOVIE && type !== MEDIA_TYPES.GAME) {
    return null;
  }

  if (!item) {
    return null;
  }

  const { title, status, platform, releaseYear, multimedia } = item;

  return (
    <div
      className="aspect-[2/3] border border-solid shadow-[0_0_1px_1px_rgba(20,24,28,1)]  border-gray-300/50 hover:cursor-pointer rounded-lg relative"
      role="card"
      aria-label={`${title} card`}
    >
      <img
        className="w-full h-full object-fill rounded-lg"
        src={multimedia[0].url}
        alt={title}
        aria-label={title}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-center text-sm font-bold">
            {type === "movie"
              ? `${title} (${releaseYear})`
              : `${title} (${platform})`}
          </p>
          <p className="text-white text-center text-xs">{status}</p>
        </div>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};

export default MediaCard;
