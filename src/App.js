import './App.css';
import About from './components/content/About';
import Navbar from './components/layout/Navbar';
import Banner from './components/layout/Banner'
import Menu from './components/content/Menu';
import Expert from './components/content/Expert';
import Testimonails from './components/content/Testimonails';
import Contact from './components/content/Contact';
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Menu />
      <Expert />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
