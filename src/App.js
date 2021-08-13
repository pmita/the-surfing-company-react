import './styling/App.scss';
//import our components
import Navbar from './components/Navbar';
//import everything react router related
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to='/' exact component={Home}/>
          <Route to='/locations' />
          <Route to='/about' />
          <Route to='/contact' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
