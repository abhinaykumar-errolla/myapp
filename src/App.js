import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
const App = () => (
  <BrowserRouter>
    <Header />
    <About />
  </BrowserRouter>
);

export default App;
