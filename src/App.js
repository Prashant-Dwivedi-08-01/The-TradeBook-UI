import './App.css';
import Hero from "./components/Hero/Hero"
import Info from "./components/Info/Info"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
