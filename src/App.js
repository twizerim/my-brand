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
import { Provider } from 'react-redux';
import { store } from './components/redux/stores/store';

function App() {
  const [isLoding,setIsLoding]=useState(false)
  useEffect(()=>{
    setIsLoding(true)
    setTimeout(()=>{
      setIsLoding(false)
    },2000)
  },[])
  return (
       <Provider store={store}>
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
       </Provider>
       
  );
}

export default App;
