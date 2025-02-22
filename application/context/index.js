import { createContext, useContext } from "react";

export const UseCaseContext = createContext(null);

export const useUseCases = () => {
  return useContext(UseCaseContext);
};
