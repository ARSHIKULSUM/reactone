import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h2>Benifits of using react...</h2>
          <ol>
            <li>Component-based architecture</li>
            <li>Virtual DOM for efficient updates</li>
            <li>Rich ecosystem and community</li>
            <li>Cross-platform development</li>
            <li>Strong community support</li>
          </ol>
          <button>Get Started</button>  
      </header>
    </div>
  );
}

export default App;
