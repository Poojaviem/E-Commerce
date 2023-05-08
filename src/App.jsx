import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Jewelery from './Pages/jewelery';
function App() {
  return (
    <Router>
      <div>
        <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/jewelery' element={<Jewelery/>}/>



       </Routes>
      </div>
    </Router>
  );
}

export default App;
