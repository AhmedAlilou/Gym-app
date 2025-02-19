import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Workouts from "./pages/workouts";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;
