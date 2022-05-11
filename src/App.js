import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import PracticalPage from "./Pages/PracticalPage"
import ProsAndConsPage from "./Pages/ProsAndConsPage"

function App() {
  return (
    <section className="App">

      <Router>
        <main>
          <Link to={"/"} ></Link>


          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/PracticalPage" element={<PracticalPage />} />
            <Route path="/ProsAndConsPage" element={<ProsAndConsPage />} />
          </Routes>

        </main >
      </Router>

    </section>
  );
}

export default App;
