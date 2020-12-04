import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion'
import Tree from './components/Tree';

function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className="container app__container">

        <div className="row app__row">
       
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9">
            <div className="app__main-content">
            <div className="mac_os">
                <div className="mac_os_sub2">
                    <div className="item item-a"></div>
                    <div className="item item-b"></div>
                    <div className="item item-c"></div>
                </div>
            </div>
            {/* navbar */}
            <Navbar />

              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Tree/>
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
              </div> 

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;