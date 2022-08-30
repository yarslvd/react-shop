import { useEffect } from 'react';
import { CartCard } from './CartCard';


function CartList(props) {
    const { cards, items } = props;
    let res = 0;

    const cartElements = cards.map(card =>  items.map(item => item.slice(0, 24).includes(card.id) ? <CartCard key = {card.id} card = {card} onClick = {() => console.log(card)}/> : null));

    const getPrice = () => {
        let arr = Object.entries(localStorage);
        let el = [];
        let res = 0;
        arr.map(item => item[0].slice(-5) === 'price' ? el.push(item) : null);
        for(let item of el) {
            res += +item[1];
        }
        return res
    }

    return (
        <div className='myCart'>
            <div className='items'>{cartElements}</div>
            <div className='total-price'>
                <div className='final'>
                    <span>Товары</span>
                    <span></span>
                    <span>{getPrice()}$</span>
                </div>
                <div className='full-price'>
                    <span>Итого:</span>
                    <h2>{getPrice()}$</h2>
                </div>
                <button className='order-btn'>Оформить заказ</button>
            </div>
        </div>
    );
}

export default CartList;