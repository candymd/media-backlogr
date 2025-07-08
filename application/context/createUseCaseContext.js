import { AddGameUseCase } from "../games/useCases/addGameUseCase";
import { GetAllGamesUseCase } from "../games/useCases/getAllGamesUseCase";
import { HttpGamesRepository } from "../../infrastructure/games/HttpGamesRepository";
import { UpdateGameByIdUseCase } from "../games/useCases/updateGameByIdUseCase";
import { DeleteGameByIdUseCase } from "../games/useCases/deleteGameByIdUseCase";
import axios from "axios";
import { HttpMoviesRepository } from "../../infrastructure/movies/HttpMoviesRepository";
import { GetAllMoviesUseCase } from "../movies/useCases/getAllMoviesUseCase";
import { AddMovieUseCase } from "../movies/useCases/addMovieUseCase";
import { UpdateMovieByIdUseCase } from "../movies/useCases/updateMovieByIdUseCase";
import { DeleteMovieByIdUseCase } from "../movies/useCases/deleteMovieByIdUseCase";

export const createUseCaseContext = () => {
  const gameRepository = new HttpGamesRepository({
    httpFetcher: axios,
  });

  const movieRepository = new HttpMoviesRepository({
    httpFetcher: axios,
  });

  const getAllMoviesUseCase = new GetAllMoviesUseCase({
    repository: movieRepository,
  });

  const getAllGamesUseCase = new GetAllGamesUseCase({
    repository: gameRepository,
  });

  const addMovieUseCase = new AddMovieUseCase({
    repository: movieRepository,
  });

  const addGameUseCase = new AddGameUseCase({
    repository: gameRepository,
  });

  const updateMovieByIdUseCase = new UpdateMovieByIdUseCase({
    repository: movieRepository,
  });

  const updateGameByIdUseCase = new UpdateGameByIdUseCase({
    repository: gameRepository,
  });

  const deleteMovieByIdUseCase = new DeleteMovieByIdUseCase({
    repository: movieRepository,
  });

  const deleteGameByIdUseCase = new DeleteGameByIdUseCase({
    repository: gameRepository,
  });

  const useCases = {
    addGameUseCase,
    getAllGamesUseCase,
    updateGameByIdUseCase,
    deleteGameByIdUseCase,
    getAllMoviesUseCase,
    addMovieUseCase,
    updateMovieByIdUseCase,
    deleteMovieByIdUseCase,
  };

  return useCases;
};
