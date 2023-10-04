import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Skills from './components/Skills/Skills';
import Careers from './components/Careers';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Careers />
        <Contact />
      </main>
    </div>
  );
}

export default App;
