import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Home from './pages/Home';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';
import Fetch from './components/Fetch';
import AxiosClass from './components/AxiosClass';
import Counts from './components/Counts';
import TodoRedux from './components/TodoRedux';
import ReuseTodo from './components/ReuseTodo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/fetch' element={<Fetch/>}/>
        <Route path='/axios' element={<AxiosClass/>}/>
        <Route path='/counts' element={<Counts/>}/>
        <Route path='/' element={<TodoRedux/>}/>
        <Route path='/reuse' element={<ReuseTodo/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
