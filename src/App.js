import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import Books from "./Books";

function App() {
  const RandomNumber = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };

  const words = "Hello, world!"
    .split("")
    .map((word) => <span style={{ color: RandomNumber() }}>{word}</span>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{words}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
        <Books />
      </header>
    </div>
  );
}

export default App;
