import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Router path="/">
          <Login />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
