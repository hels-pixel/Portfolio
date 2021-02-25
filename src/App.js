import './App.css';
import SideNav from "./common/SideNav";
import Home from "./content/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./content/about";
import Education from "./content/Education";
import contact from "./content/contact";
import Skills from "./content/Skills";



function App() {
  return (
    <Router>
      <div classname="App">
      <SideNav />
        <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path ="/Education">
          <Education />
        </Route>
        <Route exact path = "/Skills">
          <Skills/>
        <Route exact Path = "/contact"/>
          <contact/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
