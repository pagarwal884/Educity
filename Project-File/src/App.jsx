import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Title from "./Components/Title.jsx";
import About from "./Components/About.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <About />
      </div>
    </>
  );
};

export default App;
