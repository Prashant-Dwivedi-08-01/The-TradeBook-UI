import './App.css';
import Hero from "./components/Hero/Hero"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import ResetPassword from "./components/ResetPassword/ResetPassword"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/reset-password/:user_id" element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
