// import Welcome from "./components/Welcome";
import "./App.css";
// import Count from "./components/Count";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import UsersEntries from "./components/pages/UsersEntries";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import PageNotFound from "./components/pages/PageNotFound";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/usersentires" element={<UsersEntries />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:userId" element={<EditUser />} />
          <Route exact path="/users/view/:userId" element={<ViewUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Count /> */}
        {/* <Welcome /> */}
      </div>
    </Router>
  );
}

export default App;
