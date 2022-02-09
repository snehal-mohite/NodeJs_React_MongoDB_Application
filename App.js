//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login}/>
            <Route path="/user" exact component={Users}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
