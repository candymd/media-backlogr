import { UseCaseProvider } from "../application/context/UseCaseProvider";
import "./App.css";
import GameList from "../src/components/GameList.jsx";

function App() {
  return (
    <UseCaseProvider>
      <GameList />
    </UseCaseProvider>
  );
}

export default App;
