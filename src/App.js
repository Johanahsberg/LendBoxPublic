import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header'
import SideNav from './components/SideNav';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Games from './components/Games';
import RegisterForm from './components/RegisterForm';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className = "content">
        <Routes>
          <Route path = "/About" element = {<About/>}></Route>
          <Route path = "/Profile" element = {<Profile/>}></Route>
          <Route path = "/Games/:name" element = {<Game />}></Route>
          <Route path = "/Games" element = {<Games/>}></Route>
          <Route path = "/Register" element = {<RegisterForm/>}></Route>
          <Route path = "/Home" element = {<Home/>}></Route>
          <Route exact path = "/" element = {<Home/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
