import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { SocialLinksProvider } from "./components/SocialLinksContext"; // Import the provider

function App() {
  return (
    <SocialLinksProvider>
      <div>
        <NavBar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </SocialLinksProvider>
  );
}

export default App;
