import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import SideNav from './components/SideNav';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Games from './components/Games';

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className = "content">
        <Switch>
          <Route path = "/About" component = {About}></Route>
          <Route path = "/Profile" component = {Profile}></Route>
          <Route path = "/Games" component = {Games}></Route>
          <Route path = "/" component = {Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
