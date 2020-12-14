import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Parents from './components/Parents';
import Puppies from './components/Puppies';

function App() {
  return (
    <Router>
      <Header />
      <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
