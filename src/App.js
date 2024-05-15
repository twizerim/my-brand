// import logo from './logo.svg';
import './App.css';
import Welcomescreen from './screen/welcome';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Brandscreen from './screen/brandscreen';

function App() {
  return (
       <Router>
          <Routes>
            <Route path='/' exact Component={Welcomescreen}></Route>
            <Route path='/brand' Component={Brandscreen}></Route>
          </Routes>
       </Router>
  );
}

export default App;
