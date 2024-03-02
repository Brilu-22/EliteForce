import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Compare from "./pages/comparedata/Compare";
import Single from "./pages/single/Single";
import Timeline from "./pages/timeline/Timeline";

function App() {
  return (
    <section className="hero">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="compare">
              <Route index element={<Compare />} />
              <Route path=":playerId" element={<Single />} />
            </Route>
            <Route path="timeline">
              <Route index element={<Timeline />} />
              <Route path=":teamId" element={<Single />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </section>
  );
}

export default App;
