import React from 'react';
import './Stylesheets/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Intro from './Pages/Intro'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Route 
          render={({ location }) => (
            <AnimatePresence initial={true} exitBeforeEnter={true}>
              <Switch location={location} key={location.pathname}>
                <Route path= "/" exact component={Intro}/>
                <Route path="/about" component={About}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </AnimatePresence>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;