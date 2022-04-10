import './App.css';
import Hero from "./components/Hero/Hero"
import Info from "./components/Info/Info"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
