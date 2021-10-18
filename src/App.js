import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Components/Home/Home";
import NotFound from "./pages/NotFound/Components/NotFound/NotFound";
import About from "./pages/About/Components/About/About";
import FindDoctors from "./pages/FindDoctors/Components/FindDoctors/FindDoctors";
import Contact from "./pages/Contact/Components/Contact/Contact";
import Registration from "./pages/Registration/Components/Registration/Registration";
import Login from "./pages/Login/Components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Services from "./pages/Home/Components/Services/Services";
import Header from "./sharedComponents/Header/Header";
import Footer from "./sharedComponents/Footer/Footer";
import ServiceDetails from "./pages/ServiceDetails/Components/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <Route exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/services">
              <Services></Services>
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
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
