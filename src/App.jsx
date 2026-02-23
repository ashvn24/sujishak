import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationTimeline from './components/EducationTimeline';
import Experience from './components/Experience';
import Subjects from './components/Subjects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationTimeline />
        <Experience />
        <Subjects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
