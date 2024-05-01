import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wait from 'components/common/Wait';

import Home from 'components/Home';
import ErrorPage from 'components/ErrorPage';

import About from 'components/about/About';
import Faq from 'components/about/Faq';
import Reunions from 'components/about/Reunions';
import Treats from 'components/about/Treats';

import Dog from 'components/parents/Dog';
import Girls from 'components/parents/Girls';
import Studs from 'components/parents/Studs';

import Available from 'components/puppies/Available';
import Puppy from 'components/puppies/Puppy';

import './App.css';
import Nursery from 'components/puppies/Nursery';

function App() {
  return (
    <Router>
      <Header />

      <Wait />

      <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reunions" element={<Reunions />} />
            <Route path="/treats" element={<Treats />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/studmuffins" element={<Studs />} />
            <Route path="/dog/:id" element={<Dog />} />
            <Route path="/availablepuppies" element={<Available />} />
            <Route path="/litter/:id" element={<Nursery />} />
            <Route path="/puppy/:id" element={<Puppy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </main>

      <Footer></Footer>
    </Router>
  );
}

export default App;
