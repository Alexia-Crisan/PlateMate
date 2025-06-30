import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cirlce from "./pages/Circle";
import GroceryList from "./pages/GroceryList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle/:id" element={<Cirlce />} />
        <Route path="/list" element={<GroceryList />} />
      </Routes>
    </Router>
  );
}

export default App;
