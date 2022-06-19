import './App.css';
import Hero from "./components/Hero/Hero"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import ResetPassword from "./components/ResetPassword/ResetPassword"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TradeDetails from './components/TradeDetails/TradeDetails';
import Market from './components/Market/Market';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/reset-password/:user_id" element={<ResetPassword/>} />
        <Route path="/details/:script" element={<TradeDetails/>} />
        <Route path="/market" element={<Market/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
