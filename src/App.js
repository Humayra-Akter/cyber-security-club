import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Resources from "./Pages/Resources/Resources";
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
