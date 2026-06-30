import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Title from "./Components/Title.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Title />
        <Program />
      </div>
    </>
  );
};

export default App;
