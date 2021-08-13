import './styling/App.scss';
//import our components
import Navbar from './components/Navbar';
//import everything react router related
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import all pages for routing
import Home from './components/pages/Home';
import About from './components/pages/About';
import Locations from './components/pages/Locations';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to='/' exact component={Home}/>
          <Route to='/locations' component={Locations}/>
          <Route to='/about' component={About}/>
          <Route to='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
