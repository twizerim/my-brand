
import '../App.css';
import Login from '../components/home-container/login';
import React,{useState} from 'react';
import Signup from '../components/home-container/signup';
import Navigation from '../components/nav/header';


function Welcomescreen() {
  const [login ,setLogin]=useState(true)
  const [signup , setSignup]=useState(false)

  const handlelogin = ()=>{
     setLogin(true)
     setSignup(false)
  }
  const handlesignup = ()=>{
    setLogin(false)
    setSignup(true)
 }
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        
        <div className='formdisign'>
          {login && (<Login pass={handlesignup}/>)}
           {signup && (<Signup pass={handlelogin}/>)}
        </div>
      </header>
    </div>
  );
}

export default Welcomescreen;

