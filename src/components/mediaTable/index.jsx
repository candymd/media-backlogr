import PropTypes from "prop-types";
import { MEDIA_TYPES } from "../../../domain/config";

const MediaTable = ({ type, items }) => {
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
    <div className="mb-6">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">
              Status
            </th>
            {type === MEDIA_TYPES.GAME && (
              <th className="px-4 py-2 text-left text-sm text-gray-600">
                Platform
              </th>
            )}
            {type === MEDIA_TYPES.MOVIE && (
              <>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Genre
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Release Year
                </th>
                <th className="px-4 py-2 text-left text-sm text-gray-600">
                  Director
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{item.title}</td>
              <td className="px-4 py-2 text-gray-700">{item.status}</td>
              {type === MEDIA_TYPES.GAME && (
                <td className="px-4 py-2 text-gray-700">{item.platform}</td>
              )}
              {type === MEDIA_TYPES.MOVIE && (
                <>
                  <td className="px-4 py-2 text-gray-700">{item.genre}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {item.releaseYear}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{item.director}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MediaTable.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default MediaTable;
