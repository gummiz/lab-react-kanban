import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Kanban from "./components/Kanban";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Errorpage from "./components/Errorpage";


function App() {
  return (
    <>
      <div className="app">
        <Navigation />

        <Sidebar />
        <Routes>
          <Route path="/" element={<Kanban />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
