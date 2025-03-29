import { GetAllGamesUseCase } from "../media/useCases/getAllGamesUseCase";
import { AddGameUseCase } from "../media/useCases/addGameUseCase";
import { HttpGamesRepository } from "../../infrastructure/games/httpGamesRepository";
import axios from "axios";

export const createUseCaseContext = () => {
  const gameRepository = new HttpGamesRepository({
    httpFetcher: axios,
  });

  const getAllGamesUseCase = new GetAllGamesUseCase({
    repository: gameRepository,
  });

  const addGameUseCase = new AddGameUseCase({
    repository: gameRepository,
  });

  const useCases = {
    getAllGamesUseCase,
    addGameUseCase,
  };

  return useCases;
};
