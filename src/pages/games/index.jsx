import { MEDIA_TYPES } from "../../../domain/config";
import { useState, useEffect, useCallback } from "react";
import { useUseCases } from "../../../application/context";
import Layout from "../../components/shared/layout/index";
import Loader from "../../components/shared/loader/index";
import MediaForm from "../../components/media/form/index";
import MediaGrid from "../../components/media/grid";
import Modal from "../../components/shared/modal/index";
import { mapPlatformLabel } from "./settings";

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
      const mappedGames = games.map((game) => ({
        ...game,
        platform: mapPlatformLabel(game.platform),
      }));

      setGames(mappedGames);
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
    <Layout>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={toggleModal} header="Log a new game">
          <MediaForm type={MEDIA_TYPES.GAME} onSubmit={() => fetchGames()} />
        </Modal>
      )}
      <section className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-semibold">Games Backlog</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 text-brand-lightest rounded-lg font-semibold bg-brand-primary hover:bg-brand-secondary"
        >
          Log game
        </button>
      </section>
      <MediaGrid type={MEDIA_TYPES.GAME} items={games} />
    </Layout>
  );
}

export default GamesPage;
