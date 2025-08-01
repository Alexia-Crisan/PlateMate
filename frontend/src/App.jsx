import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cirlce from "./pages/Circle";
import GroceryList from "./pages/GroceryList";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="m-8">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/circles/:id" element={<Cirlce />} />
            <Route path="/circles/:id/groceries" element={<GroceryList />} />
            <Route path="/profile/:id" element={<MyProfile/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
