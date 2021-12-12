import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/dashboard">
          <Dashboard />
        </Router>
        <Router path="/">
          <Login />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
