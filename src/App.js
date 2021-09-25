import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from './components/Test';
import Header from './components/navbar/Header';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Test} />
        <Route path="/Login" />

      </Switch>
    </Router>
  );
}

export default App;
