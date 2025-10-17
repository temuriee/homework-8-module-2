import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Impact from "./components/Impact/Impact";
import Locations from "./components/Locations/Locations";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Impact" element={<Impact />} />
        <Route path="/Locations" element={<Locations />} />
      </Routes>
    </div>
  );
};

export default App;
