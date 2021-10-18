import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Components/Home/Home";
import NotFound from "./pages/NotFound/Components/NotFound/NotFound";
import About from "./pages/About/Components/About/About";
import FindDoctors from "./pages/FindDoctors/Components/FindDoctors/FindDoctors";
import Contact from "./pages/Contact/Components/Contact/Contact";
import Registration from "./pages/Registration/Components/Registration/Registration";
import Login from "./pages/Login/Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/doctors">
            <FindDoctors></FindDoctors>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/registration">
            <Registration></Registration>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
