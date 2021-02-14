import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wait from 'components/common/Wait';

import Home from 'components/Home';

import About from 'components/about/About';
import Faq from 'components/about/Faq';
import Reunions from 'components/about/Reunions';
import Treats from 'components/about/Treats';

import Dog from 'components/parents/Dog';
import Girls from 'components/parents/Girls';
import Studs from 'components/parents/Studs';

import Puppies from 'components/puppies/Puppies';

import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Wait />

      <main className="app-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/reunions">
              <Reunions />
            </Route>
            <Route path="/treats">
              <Treats />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/girls">
              <Girls />
            </Route>
            <Route path="/studmuffins">
              <Studs />
            </Route>
            <Route path="/dog/:id">
              <Dog />
            </Route>
            <Route path="/puppies">
              <Puppies />
            </Route>
          </Switch>
      </main>

      <Footer></Footer>
    </Router>
  );
}

export default App;
