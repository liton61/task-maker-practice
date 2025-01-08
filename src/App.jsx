import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
