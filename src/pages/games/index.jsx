import { useState, useEffect, useCallback } from "react";
import GamesTable from "../../components/gamesTable";
import AddGameForm from "../../components/addGameForm";
import Modal from "../../components/modal";
import { useUseCases } from "../../../application/context";

function GamesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [games, setGames] = useState([]);

  const { getAllGamesUseCase } = useUseCases();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddGameFormSubmit = () => {
    fetchGames();
  };

  const fetchGames = useCallback(async () => {
    try {
      const allGames = await getAllGamesUseCase.execute();
      setGames(allGames);
    } catch (error) {
      console.error(error);
    }
  }, [getAllGamesUseCase]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <AddGameForm onSubmit={handleAddGameFormSubmit} />
        </Modal>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Games Backlog</h1>
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
    </>
  );
}

export default GamesPage;
