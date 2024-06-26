
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
          <div className='loginheading'>
              <h2 className={login===true ? "activeform" :"" } onClick={handlelogin}>Login</h2>
              <h2 className={signup===true ? "activeform" :"" } onClick={handlesignup}>Sign up</h2>
          </div>
          {login && (<Loginform pass={handlesignup}/>)}
           {signup && (<Signupform/>)}
        </div>
      </header>
    </div>
  );
}

export default Welcomescreen;
