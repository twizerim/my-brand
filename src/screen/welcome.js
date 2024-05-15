
import '../App.css';
import Loginform from '../component/login';
import React,{useState} from 'react';
import Signupform from "../component/signup"


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
      <header className="App-header">
        
        <div className='formdisign'>
          {login && (<Loginform pass={handlesignup}/>)}
           {signup && (<Signupform pass={handlelogin}/>)}
        </div>
      </header>
    </div>
  );
}

export default Welcomescreen;

