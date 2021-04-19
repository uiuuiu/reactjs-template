import React, { Children, useState } from "react";
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import { Container } from 'react-bootstrap';

import ThemeContext from './contexts/themeContext';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import './App.css';


const App = () => {

  const [theme, setTheme] = useState("light")
  const value = { theme, setTheme }
  
  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <Container>
          <Layout>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <PrivateRoute path="/users">
                {/* <Users /> */}
              </PrivateRoute>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Layout>
        </Container>
      </ThemeContext.Provider>
    </div>
  );
}

const PrivateRoute = ({path}) => {
  const history = useHistory();
  const authenticated = localStorage.getItem('name')
  if (!authenticated) return history.push("/");

  return (
    <Route path={path}>{Children}</Route>
  )
}

PrivateRoute.propTypes = {
  path: PropTypes.string
}

export default App;
