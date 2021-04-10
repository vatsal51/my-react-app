import logo from './logo.svg';
import './App.css';
import Airports from './components/Airports';

function App() {
  return (
    <div className="App">
    
{/* <Airports data={data} /> */}

     <Airports Airports={Airports}/>
    </div>
  );
}

export default App
