import { UseCaseProvider } from "../application/context/UseCaseProvider";
import { useState, useEffect } from "react";
import "./App.css";
import GamesTable from "./components/gamesTable";
import AddGameForm from "./components/addGameForm";
import Modal from "./components/modal";
import { useUseCases } from "../application/context";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [games, setGames] = useState([]);

  const { getAllGamesUseCase } = useUseCases();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getAllGames = async () => {
      try {
        const allGames = await getAllGamesUseCase.execute();
        setGames(allGames);
      } catch (error) {
        console.error(error);
      }
    };

    getAllGames();
  }, [getAllGamesUseCase]);

  return (
    <UseCaseProvider>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <AddGameForm />
        </Modal>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Game backlog tracker</h1>
        <div className="mb-6">
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Game
          </button>
        </div>
        <GamesTable games={games} />
      </div>
    </UseCaseProvider>
  );
}

export default App;
