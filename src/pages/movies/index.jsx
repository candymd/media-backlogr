import { useCallback, useEffect, useState } from "react";
import { useUseCases } from "../../../application/context";
import Modal from "../../components/modal";
import MediaForm from "../../components/mediaForm";
import { MEDIA_TYPES } from "../../../domain/config";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getAllMoviesUseCase } = useUseCases();

  const fetchMovies = useCallback(async () => {
    try {
      const movies = await getAllMoviesUseCase.execute();
      setMovies(movies);
    } catch (error) {
      // TODO: handle error
      console.error(error);
    }
  }, [getAllMoviesUseCase]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={toggleModal}
          header="Log a new movie"
        >
          <MediaForm type={MEDIA_TYPES.MOVIE} onSubmit={() => fetchMovies()} />
        </Modal>
      )}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Movies Backlog</h1>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
        <div className="mb-6">
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Movie
          </button>
        </div>
      </div>
    </>
  );
}
