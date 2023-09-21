// import logo from './logo.svg';
import './App.css';
import Welcomescreen from './screen/welcome';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Brandscreen from './screen/brandscreen';
import Blogdashboard from "./screen/blogscreen"
import Userdadhbord from './screen/useritaface';
import Adminpanal from "./screen/adminpanal"
import Preloader from './components/home-container/plerloard';
import { useEffect, useState } from 'react';
import ContactScreen from './screen/contactScreen';

function App() {
  const [isLoding,setIsLoding]=useState(false)
  useEffect(()=>{
    setIsLoding(true)
    setTimeout(()=>{
      setIsLoding(false)
    },2000)
  },[])
  return (
       <Router>
        {isLoding ?(
          <Preloader/>
        ):(
          <>
            <Routes>
                 <Route path='/' exact Component={Brandscreen}></Route>
                 <Route path='/login' Component={Welcomescreen}></Route>
                 <Route path='/blogscreen' Component={Blogdashboard}></Route>
                 <Route path='/userdash' Component={Userdadhbord}></Route>
                 <Route path='/admin' Component={Adminpanal}></Route>
                 <Route path='contact' Component={ContactScreen}></Route>
              </Routes>
          </>
        )}
       </Router>
  );
}

export default App;
