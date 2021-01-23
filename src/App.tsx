import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Parents from './components/Parents';
import Puppies from './components/Puppies';
import Reunions from './components/Reunions';
import Treats from './components/Treats';

function App() {
  return (
    <Router>
      <Header />

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
            <Route path="/parents">
              <Parents />
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
