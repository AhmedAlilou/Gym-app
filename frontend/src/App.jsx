import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Workouts from "./pages/workouts";
import Startworkout from "./pages/startworkout";
import Progress from "./pages/progress";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/workouts" element={<Workouts />}></Route>
          <Route path="/startworkout" element={<Startworkout />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
