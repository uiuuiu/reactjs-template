import React from "react";
import {
  Switch,
  Route, 
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import './App.css';


const App = () => {  
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
