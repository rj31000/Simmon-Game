
import './App.css';
import Heading from './components/Heading';
import Game from './components/Game';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className="App min-h-screen bg-red-500">
      
      <BrowserRouter>
      <Route path="/" exact component={Heading} />
      <Route path="/Game" exact component={Game} />
      </BrowserRouter>
    </div>
  );
}

export default App;
