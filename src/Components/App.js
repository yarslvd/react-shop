import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.scss';
import  {UpperHeader, BgHeader} from './UpperHeader';
import Header from './Header';
import Slider from './Slider';
import Products from './Products';

function App() {

  return (
    <>
      <BgHeader />
      <div className='wrapper container-fluid'>
        <UpperHeader />
        <Header />
        <Slider />
        <Products/>
      </div>
    </>
  );
}

export default App;
