import "./App.css";
import SearchBar from "./SearchBar";
import logo from "./Daco_109903.png";
import { Card } from "./Card";

function App() {
  return (
    <div className="app">
      <img className="app__logo" src={logo} alt="rick and morty logo" />
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
