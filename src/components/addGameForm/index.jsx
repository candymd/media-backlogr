/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUseCases } from "../../../application/context";

const AddGameForm = ({ onSubmit }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [platform, setPlatform] = useState("");
  const { addGameUseCase } = useUseCases();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newGAme = await addGameUseCase.execute({ title, status, platform });
      console.log(newGAme);
      setSuccess("Game added successfully!");

      setTitle("");
      setStatus("");
      setPlatform("");

      onSubmit();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add new game</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Status</option>
            <option value="in_backlog">In Backlog</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600">Platform</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Platform</option>
            <option value="PC">PC</option>
            <option value="XBOX">XBOX</option>
            <option value="PLAYSTATION_5">PS5</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add game
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
};

export default AddGameForm;
