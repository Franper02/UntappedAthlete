import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';


function App() {
  return (
    <div className="text-center bg-[#161516] 2xl:max-w-[90rem] 2xl:mx-auto">
      <Hero />
      <Features />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default App;
