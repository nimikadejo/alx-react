import logo from './Holberton.jpg';
import { getFullYear, getFooterCopy } from './utils.js';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Dashtext">School dashboard</h1>
      </header>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
