import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testominals from './Components/Testominals/Testominals';
import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
   <Hero></Hero>
   <div className='container'>
    <Title subTitle='Our Program' Title='What we Offer'></Title>
   <Programs></Programs>
   <About></About>
   <Title subTitle='Gallery' Title='Campus photos'></Title>
   <Campus></Campus>
   <Title subTitle='Testominals' Title='What Student Says'></Title>
   <Testominals></Testominals>
   <Title subTitle='Contact Us' Title='Get in Touch'></Title>
   <Contact></Contact>
   <Footer></Footer>
   </div>
    </div>
  );
}

export default App;
