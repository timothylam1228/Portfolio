import './App.css';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Skills from './components/Skills/Skills';
import Careers from './components/Careers';
import Contact from './components/Contact';
import PageSpace from './components/PageSpace';
import Project from './components/Project';
import Education from './components/Education';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-034X03BZKP');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App mb-12">
      <Header />
      <main>
        <Hero />
        <Skills />
        <PageSpace />
        <Careers />
        <PageSpace />
        <Education />
        <PageSpace />
        <Project />
        <PageSpace />
        <Contact />
      </main>
    </div>
  );
}

export default App;
