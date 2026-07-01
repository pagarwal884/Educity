import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Title from "./Components/Title.jsx";
import About from "./Components/About.jsx";
import Campus from "./Components/Campus.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

export default App;
