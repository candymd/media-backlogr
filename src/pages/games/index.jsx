import { useState, useEffect, useCallback } from "react";
import GamesTable from "../../components/gamesTable";
import Modal from "../../components/modal";
import { useUseCases } from "../../../application/context";
import { MEDIA_TYPES } from "../../../domain/config";
import MediaForm from "../../components/mediaForm";

function GamesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [games, setGames] = useState([]);

  const { getAllGamesUseCase } = useUseCases();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchGames = useCallback(async () => {
    try {
      const allGames = await getAllGamesUseCase.execute();
      setGames(allGames);
    } catch (error) {
      // TODO: handle error
      console.error(error);
    }
  }, [getAllGamesUseCase]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={toggleModal} header="Log a new game">
          <MediaForm type={MEDIA_TYPES.GAME} onSubmit={() => fetchGames()} />
        </Modal>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Games Backlog</h1>
        <div className="mb-6">
          <button
            onClick={toggleModal}
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
