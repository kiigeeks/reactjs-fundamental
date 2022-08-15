import logo from './logo.svg';
import './App.css';

function Errors() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: "7em" }}>404</h1>
        <h1>Page Not Found</h1>
      </header>
    </div>
  );
}

export default Errors;
