import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AuditoriumManager from "./components/AuditoriumManager";
import Home from "./pages/Home";
import AllShows from "./components/AllShows";
import CreateShow from "./components/CreateShow";
import Salesperson from "./components/Salesperson";
import UserDashboard from "./components/UserDashboard";
import AddExpense from "./pages/AddExpense";
import Accountants from "./pages/Accountants";
import BookTicket from "./pages/BookTicket";
import Signup from "./pages/Signup";
import Expenses from "./components/Expenses";
import Login from "./pages/Login";
import AddAccountants from "./components/AddAccountants";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="allshows" element={<AllShows />} />
          <Route path="createshow" element={<CreateShow />} />
          <Route path="bookticket" element={<BookTicket />} />
          <Route path="accountants" element={<Accountants />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* shows transaction history */}
          <Route path="salesperson" element={<Salesperson />} />
          {/* not done yet */}
          <Route path="userDashboard" element={<UserDashboard />} />

          <Route path="addExpense" element={<AddExpense />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="addAccountants" element={<AddAccountants />} />
        </Route>
      </Routes>

      {/* */}
    </>
  );
}

export default App;
