import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Kanban from "./components/Kanban";

function App() {
  return (
    <>
      <div className="app">
        <Navigation />

          <Sidebar />
          <Kanban />
      
        <Footer />
      </div>
    </>
  );
}

export default App;
