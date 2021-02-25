import './App.css';
import SideNav from "./common/SideNav";
import Home from "./content/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./content/About";
import Education from "./content/Education";
import Contact from "./content/Contact";
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
        <Route exact path ="/education">
          <Education />
        </Route>
        <Route exact path = "/skills">
          <Skills/>
        <Route exact Path = "/contact"/>
          <Contact/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
