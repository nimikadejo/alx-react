import logo from './Holberton.jpg';

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
      </div>
      <div className="App-footer">
        Copyright 2020 - holberton School
      </div>
    </div>
  );
}

export default App;
