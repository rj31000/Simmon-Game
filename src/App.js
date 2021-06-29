
import './App.css';
import Heading from './components/Heading';
import Game from './components/Game';
import { Route, BrowserRouter } from 'react-router-dom';
import {HashRouter} from 'react-router-dom'
function App() {
  
  return (
    <div className="App min-h-screen bg-yellow-100">
      
      <HashRouter>
      <Route path="/" exact component={Heading} />
      <Route path="/Game" exact component={Game} />
      </HashRouter>
    </div>
  );
}

export default App;
