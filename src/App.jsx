import './index.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Home />
    </>
  );
}

export default App;

