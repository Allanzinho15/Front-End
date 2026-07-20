
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Empresa } from './pages/empresa';
import { Contato } from './pages/contatos';
import { Navbar } from './pages/NavBar';
import { Footer } from './pages/footer'
function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>

        <Route path='/empresa' element={<Empresa />} />
          
        <Route path='/contato' element={<Contato />} />
          
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
