import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Skills from './components/Skills/Skills';
import Careers from './components/Careers';
import Contact from './components/Contact';
import PageSpace from './components/PageSpace';
import Project from './components/Project';
import Education from './components/Education';
function App() {
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
