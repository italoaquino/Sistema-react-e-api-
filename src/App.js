import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/pages/Home';
import Contato from './pages/pages/Contato';
import Company from './pages/pages/Company';
import Newproject from './pages/pages/Newproject';
import Navbar from './layout/Navbar';
import Footer from '../src/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

          <Route path="/" element={<Home/>} />   
          <Route path="/contato" element={<Contato/>} />
          <Route path="/newproject" element={<Newproject/>} />
          <Route path="/company" element={<Company/>} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
