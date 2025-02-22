/* eslint-disable react/prop-types */
import { UseCaseContext } from "./index.js"; // Use the correct path here
import { createUseCaseContext } from "./createUseCaseContext";

const useCases = createUseCaseContext();

export const UseCaseProvider = ({ children }) => {
  return (
    <UseCaseContext.Provider value={useCases}>
      {children}
    </UseCaseContext.Provider>
  );
};
