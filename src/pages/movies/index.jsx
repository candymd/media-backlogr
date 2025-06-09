import { useCallback, useEffect, useState } from "react";
import { useUseCases } from "../../../application/context";
import Modal from "../../components/shared/modal/index";
import MediaForm from "../../components/media/form/index";
import { MEDIA_TYPES } from "../../../domain/config";
import MediaGrid from "../../components/media/grid/index";
import Loader from "../../components/shared/loader/index";
import Layout from "../../components/shared/layout/index";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { getAllMoviesUseCase } = useUseCases();

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const movies = await getAllMoviesUseCase.execute();
      setMovies(movies);
    } catch (error) {
      // TODO: handle error
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [getAllMoviesUseCase]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        <Modal
          open={isModalOpen}
          onClose={toggleModal}
          header="Log a new movie"
        >
          <MediaForm type={MEDIA_TYPES.MOVIE} onSubmit={() => fetchMovies()} />
        </Modal>
      )}
      <section className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-semibold">Movies Backlog</h1>
        <button
          onClick={toggleModal}
          className="px-4 py-2 text-brand-lightest rounded-lg font-semibold bg-brand-primary hover:bg-brand-secondary"
        >
          Log movie
        </button>
      </section>
      <MediaGrid type={MEDIA_TYPES.MOVIE} items={movies} />
    </Layout>
  );
}
