
import '../App.css';
import Navigation from '../component/header';
import Homescreen from '../component/home';
import Aboutme from '../component/aboutme';
import Skills from '../component/skillis';
import Portifolio from '../component/poltifolio';
import Blogs from '../component/blogs';
import Contactme from '../component/contactme';
import Footer from '../component/footer';

function Brandscreen() {
  return (
    <div className="App">
        <Navigation/>
        <Homescreen/>
        <Aboutme/>
        <Skills/>
        <Portifolio/>
        <Blogs/>
        <Contactme/>
        <Footer/>
    </div>
  );
}

export default Brandscreen;
