// import logo from './logo.svg';
import './App.css';
import Welcomescreen from './screen/welcome';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Brandscreen from './screen/brandscreen';
import Skillspage from './screen/skill';
import Userdadhbord from './screen/useritaface';

function App() {
  return (
       <Router>
          <Routes>
            <Route path='/' exact Component={Brandscreen}></Route>
            <Route path='/login' Component={Welcomescreen}></Route>
            <Route path='/skills' Component={Skillspage}></Route>
            <Route path='/userdash' Component={Userdadhbord}></Route>
          </Routes>
       </Router>
  );
}

export default App;
