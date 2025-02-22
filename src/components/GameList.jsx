import { useEffect, useState } from "react";
import { useUseCases } from "../../application/context/index";

const GameList = () => {
  const { getAllGamesUseCase } = useUseCases();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getAllGames = async () => {
      try {
        const allGames = await getAllGamesUseCase.execute();
        setGames(allGames);
      } catch (error) {
        console.error(error);
      }
    };

    getAllGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>GameList</h1>
      {games.map((game) => (
        <ul key={game.id}>
          <li>{game.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default GameList;
