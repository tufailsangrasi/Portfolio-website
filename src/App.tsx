import { HelmetProvider, Helmet } from "react-helmet-async";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tufail Ahmed | ML/DL Engineer</title>
        <meta
          name="description"
          content="Tufail Ahmed — ML/DL Engineer. Designing intelligent systems that learn, scale, and solve real-world problems."
        />
      </Helmet>

      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
