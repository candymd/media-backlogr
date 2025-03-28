/* eslint-disable react/prop-types */
import "./index.css";

const GamesTable = ({ games }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Games List</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm text-gray-600">Title</th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm text-gray-600">
              Platform
            </th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{game.title}</td>
              <td className="px-4 py-2 text-gray-700">{game.status}</td>
              <td className="px-4 py-2 text-gray-700">{game.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;
