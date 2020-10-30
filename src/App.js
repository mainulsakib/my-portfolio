import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Component/Home/About/About';
import Project from './Component/Home/Project/Project';
import Contact from './Component/Home/Contact/Contact';
import Blog from './Component/Home/Blog/Blog';


function App() {
  return (
    <Router className='App'>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/Home">
        <Home></Home>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
        <Route path="/projects">
         <Project></Project>
        </Route>
        <Route path="/Contact">
          <Contact></Contact>
        </Route>
        <Route path="/Blog">
          <Blog></Blog>
        </Route>
      </Switch>
    </Router>
      
     

  );
}

export default App;
