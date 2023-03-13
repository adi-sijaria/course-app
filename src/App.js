import logo from './logo.svg';
import './App.css';
import Menu from './routes/menu/menu';
import Navbar from './routes/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Wishlist from './routes/Wishlist/Wishlist';
import Cart from './routes/cart/Cart';

function App() {
  return (
    <div className="App">
    
      {/* <Menu/> */}
      <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='wishlist' element={<Wishlist />} />
            


             <Route path='checkout' element={<Cart />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
