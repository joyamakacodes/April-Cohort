import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Carousel/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
