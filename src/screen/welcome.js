
import '../App.css';
import Loginform from '../component/login';

function Welcomescreen() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className='formdisign'>
          <div className='loginheading'>
              <h2>Login</h2>
              <h2>Sign up</h2>
          </div>
           <Loginform/>
        </div>
        
        <a
          className="App-link"
          href="/brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Welcomescreen;
