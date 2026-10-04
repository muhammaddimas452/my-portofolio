import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#08080c] min-h-screen text-white font-sans selection:bg-gray-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-800 mt-20 py-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} My Portfolio. Built with React & Tailwind
          CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
