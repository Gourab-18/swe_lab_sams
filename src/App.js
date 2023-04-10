import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AuditoriumManager from "./components/AuditoriumManager";
import Home from "./pages/Home";
import AllShows from "./components/AllShows";
import CreateShow from "./components/CreateShow";
import Login from "./pages/Login";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <AuditoriumManager /> */}
      <Navbar />
      {/* <AllShows /> */}

      {/* <CreateShow /> */}
      <Login />
    </>
  );
}

export default App;
