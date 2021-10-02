import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/navbar/Header';
import Home from './components/Home';
import RegisterForm from './components/register_options/RegisterForm';
import Curriculum from './components/body/Curriculum';
import Fotter from './components/navbar/Fotter';



function App() {
  return (
    <Router>
      <Header/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={RegisterForm} />
        <Route path="/curriculum" component={Curriculum} />        
      </Switch>
      
    </Router>
  );
}

export default App;
