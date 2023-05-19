import logo from './logo.svg';
import './App.css';
import Button from './atoms/btn';
import { useNavigate } from 'react-router-dom';

function App() {
      const travel= useNavigate()
  function navigatePage(){
    travel('/quiz')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>React Quiz Website</p>
        </p>
        <Button text='Click To Start !!' handleClick={navigatePage}/>
       
      </header>
    </div>
  );
}

export default App;
