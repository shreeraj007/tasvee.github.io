import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/homepage/Header';
import Home from './components/Home';
import Wedddis from './components/Categories/Wedddis';
import Portdis from './components/Categories/Portdis';
import Proddis from './components/Categories/Proddis';
import Wprone from './components/Profiles/Wprone';
import Aboutus from './components/homepage/Aboutus';
import Privacy from './components/homepage/Privacy';
import Login from './components/login/Login';



function App() {
  return (
       <div className="app">
       <Router>
       <Switch>
         <Route path="/checkout">
           <h1>checkout</h1>
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/wedding">
         <Header />
           <Wedddis />
         </Route>
         <Route path="/wprone">
          <Wprone />
         </Route>
         <Route path="/portrait">
         <Header />
           <Portdis />
         </Route>
         <Route path="/product">
         <Header />
           <Proddis />
         </Route>
         <Route path="/aboutus">
           <Aboutus />
         </Route>
         <Route path="/privacy">
           <Privacy />
         </Route>
         <Route path="/">
         <Header />
           <Home />
         </Route>
       </Switch>
       </Router>
    </div>
    
   
  );
}

export default App;
