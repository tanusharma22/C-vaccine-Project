import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Patient from "./components/Patient";
import AdminLogin from "./components/AdminLogin";
import AdminDetails from "./components/AdminDetails";
import SearchSlot from './components/SearchSlot'
import Slider from './components/Slider';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Home" >
          <Home />
          
          </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route path="/PatientDetails">
          <Patient/>
        </Route>
        <Route path="/AdminLogin">
          <AdminLogin/>
        </Route>
        <Route path="/AdminDetails">
          <AdminDetails/>
        </Route>
        <Route path="/SearchSlot">
          <SearchSlot/>
        </Route>
      </div>
    </Router>

  );
}

export default App;
