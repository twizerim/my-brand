
import '../App.css';
import Navigation from '../components/nav/header';
import Homescreen from '../components/home-container/home';
import Aboutme from '../components/home-container/aboutme';
import Skills from '../components/home-container/skillis';
import Portifolio from '../components/home-container/poltifolio';
import Contactme from '../components/home-container/contactme';
import Footer from '../components/home-container/footer';
// import Adminpanal from './adminpanal';

function Brandscreen() {
  return (
    <div className="App">
        <Navigation/>
        <Homescreen/>
        <Aboutme/>
        <Skills/>
        <Portifolio/>
        <Contactme/>
        <Footer/>
        {/* <Adminpanal/> */}
    </div>
  );
}

export default Brandscreen;
