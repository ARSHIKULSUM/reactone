import logo from './logo.svg';
import './App.css';
import ReactBenefit from './component/ReactBenefit';
import Button from './component/button';
import Image from './component/image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Image />
          <ReactBenefit />
          <Button />
      </header>
    </div>
  );
}

export default App;
