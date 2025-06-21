
import '../../App.css';
import Navigation from '../../components/nav/header';
import Homescreen from '../../components/client/home-container/home';
import Aboutme from '../../components/client/home-container/aboutme';
import Skills from '../../components/client/home-container/skillis';
import Portifolio from '../../components/client/home-container/poltifolio';
import Contactme from '../../components/client/home-container/contactme';
import Footer from '../../components/nav/footer';

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
    </div>
  );
}

export default Brandscreen;
