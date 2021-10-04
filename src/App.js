import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/AboutUs/About';
import ContactUs from './Components/ContactUS/ContactUs';
import Notfound from './Components/Notfound/Notfound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/services'>
              <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
