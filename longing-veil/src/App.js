import logo from "./logo.svg";
import "./App.css";
import 'aos'
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({ easing: "ease", offset:130 ,duration: 800 });
  return (
  <div className="App">
  {/* <AllRoutes/> */}
  <Navbar/>
  </div>
  );
}

export default App;
