import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cirlce from "./pages/Circle";
import GroceryList from "./pages/GroceryList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-8">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/circle/:id" element={<Cirlce />} />
            <Route path="/list" element={<GroceryList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
