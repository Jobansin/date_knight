import './index.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Home />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;

