
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
 <Router>
    <Header/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/contact" component={Contact} />
      </Switch>
 </Router>
  );
}

export default App;
