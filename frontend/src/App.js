import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cirlce from "./pages/Circle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle/:id" element={<Cirlce />} />
      </Routes>
    </Router>
  );
}

export default App;
