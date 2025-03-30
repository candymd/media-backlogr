import { AddGameUseCase } from "../media/useCases/addGameUseCase";
import { GetAllGamesUseCase } from "../media/useCases/getAllGamesUseCase";
import { HttpGamesRepository } from "../../infrastructure/games/httpGamesRepository";
import { UpdateGameByIdUseCase } from "../media/useCases/updateGameByIdUseCase";
import { DeleteGameByIdUseCase } from "../media/useCases/deleteGameByIdUseCase";
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

  const updateGameByIdUseCase = new UpdateGameByIdUseCase({
    repository: gameRepository,
  });

  const deleteGameByIdUseCase = new DeleteGameByIdUseCase({
    repository: gameRepository,
  });

  const useCases = {
    addGameUseCase,
    getAllGamesUseCase,
    updateGameByIdUseCase,
    deleteGameByIdUseCase,
  };

  return useCases;
};
