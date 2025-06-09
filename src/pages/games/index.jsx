import { useState, useEffect, useCallback } from "react";
import MediaTable from "../../components/media/table/index";
import Modal from "../../components/shared/modal/index";
import { useUseCases } from "../../../application/context";
import { MEDIA_TYPES } from "../../../domain/config";
import MediaForm from "../../components/media/form/index";
import Loader from "../../components/shared/loader/index";

function GamesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);

  const { getAllGamesUseCase } = useUseCases();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const fetchGames = useCallback(async () => {
    try {
      setIsLoading(true);
      const games = await getAllGamesUseCase.execute();
      setGames(games);
    } catch (error) {
      // TODO: handle error
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [getAllGamesUseCase]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={toggleModal} header="Log a new game">
          <MediaForm type={MEDIA_TYPES.GAME} onSubmit={() => fetchGames()} />
        </Modal>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Games Backlog</h1>
        <MediaTable type={MEDIA_TYPES.GAME} items={games} />
        <div className="mb-6">
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
          >
            Add New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default GamesPage;
