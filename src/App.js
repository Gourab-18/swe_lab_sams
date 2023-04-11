import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AuditoriumManager from "./components/AuditoriumManager";
import Home from "./pages/Home";
import AllShows from "./components/AllShows";
import CreateShow from "./components/CreateShow";
import Login from "./pages/Login";
import Salesperson from "./components/Salesperson";
import UserDashboard from "./components/UserDashboard";
import AddExpense from "./pages/AddExpense";
import Accountants from "./pages/Accountants";
import BookTicket from "./pages/BookTicket";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <AuditoriumManager /> */}
      <Navbar />
      <AllShows />

      {/* <CreateShow /> */}
      {/* <Login /> */}
      {/* <Salesperson /> */}
      {/* <UserDashboard/> */}
      {/* <AddExpense /> */}
      {/* <Accountants/> */}
      {/* <BookTicket /> */}
    </>
  );
}

export default App;
