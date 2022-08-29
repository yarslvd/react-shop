import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';
import { Routes, Route } from 'react-router-dom';
import  {UpperHeader, BgHeader} from './UpperHeader';
import Header from './Header';
import Slider from './Slider';
import Products from './Products';
import Cart from './Cart';
import cardInfo from './fixtures';
import ItemPage from './ItemPage';

function App() {
  return (
    <>
      <BgHeader />
      <div className='wrapper container-fluid'>
        <UpperHeader />
        <Header />
        <Routes>
          <Route path='/' element={<div><Slider /><Products/></div>}></Route>
          <Route path='/cart' element={<Cart cards = {cardInfo}/>}></Route>
          <Route path='/item' element={<ItemPage cards = {cardInfo}/>}></Route>
        </Routes> 
      </div>
    </>
  );
}

export default App;
