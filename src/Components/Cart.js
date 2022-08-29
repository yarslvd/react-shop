import '../Components/Cart.scss';
import CartList from './CartList';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import cardInfo from './fixtures';

function Cart(props) {
    const {cards} = props;

    const getItems = () => {
        let arr = [];
        for(let el in localStorage) {
            if(el.slice(-4) === 'cart' && localStorage[el] === 'true'){
                arr.push(el);
            } 
        }
        return arr;
    }

    const cardElements = cards.map(card => card.id === '56c782f1e17f4f9311dfaa2c' ? ' ': <Card key = {card.id} card = {card}/>);

    return (
        <div className='cart-area'>
            <div className="cart">
                <span>Главная → Корзина</span>
                <div className='mycart'>
                    <div className='heading'>
                        <h3>Моя корзина</h3>
                    </div>
                    <CartList cards = {cardInfo} items = {getItems()}/>
                </div>
            </div>
            <div className='proposal'>
                <h3>С этим покупают</h3>
                <Row md={4}>
                    {cardElements}
                </Row>
            </div>
        </div>
    )
}

export default Cart;