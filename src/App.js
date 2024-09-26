
import About from './about';
import './App.css';
import Home from './home';
import Testimonial from './testimonial';
import Contact from './contact';
import Footer from './footer';
import JacketGallery from './Card';

function App() {

  return (
    <div className="App">
    <Home/>
   <div className="jacketGallery">
    <JacketGallery title={"Trending"} which={1}/>
    <JacketGallery title={"Most Sold"} which={2}/>
    <JacketGallery title={"Upcoming"} which={3}/>
   </div>
    <About />
    <Testimonial />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
