import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import ShopCart from './components/shopCart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <ShopCart/> */}
      <NotFound/>
    </div>
  );
}

export default App;
