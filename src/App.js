import React, { Component } from 'react';

//importing SPA Needs
import { Switch , Route , Redirect } from 'react-router-dom';

//importing Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/Products" component = {Products}/>
          <Route path="/AboutUs" component = {AboutUs}/>
          <Route path="/" component = {Landing}/>
          <Route path="/notfound" component ={NotFound}/>
          <Redirect to = "/notfound"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;