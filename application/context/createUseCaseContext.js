import { InMemoryGameRepository } from "../../infrastructure/media/repositories/InMemoryGameRepository";
import { GetAllGamesUseCase } from "../media/useCases/getAllGamesUseCase";

export const createUseCaseContext = () => {
  const gameRepository = new InMemoryGameRepository();

  const getAllGamesUseCase = new GetAllGamesUseCase({
    repository: gameRepository,
  });

  const useCases = {
    getAllGamesUseCase,
  };

  return useCases;
};
