import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nottingham" />
        <footer>
          This project is coded by Hannah Nicole Charles-Murphy and is{" "}
          <a
            href="https://github.com/HannahNC23/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
