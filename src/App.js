// import logo from './logo.svg';
import './App.css';
import Welcomescreen from './screen/auth/welcome';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Brandscreen from './screen/client/brandscreen';
import Blogdashboard from "./screen/client/blogscreen"
import Adminpanal from "./screen/admin/adminpanal"
import Preloader from './plerloard';
import { useEffect, useState } from 'react';
import ContactScreen from './screen/client/contactScreen';

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
                 <Route path='/admin' Component={Adminpanal}></Route>
                 <Route path='contact' Component={ContactScreen}></Route>
              </Routes>
          </>
        )}
       </Router>
  );
}

export default App;
