import { InMemoryGameRepository } from "../../infrastructure/media/repositories/InMemoryGameRepository";
import { GetAllGamesUseCase } from "../media/useCases/getAllGamesUseCase";
import { AddGameUseCase } from "../media/useCases/addGameUseCase";

export const createUseCaseContext = () => {
  const gameRepository = new InMemoryGameRepository();

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
