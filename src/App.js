import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AuditoriumManager from "./components/AuditoriumManager";
import Check from "./components/Check";
import Home from "./pages/Home";
import AllShows from "./components/AllShows";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <AuditoriumManager /> */}
      {/* <Check /> */}
      <Navbar />
      <AllShows />
    </>
  );
}

export default App;
