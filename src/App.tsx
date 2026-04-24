import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans antialiased text-grain">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Featured />
        <Gallery />
        <Reviews />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
