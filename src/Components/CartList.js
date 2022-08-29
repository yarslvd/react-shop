import {CartCard } from './CartCard';


function CartList(props) {
    const { cards, items } = props;

    const cartElements = cards.map(card =>  items.map(item => item.slice(0, 24).includes(card.id) ? <CartCard key = {card.id} card = {card} onClick = {() => console.log(card)}/> : null));


    return (
        <div className='myCart'>
            <div className='items'>{cartElements}</div>
            <div className='total-price'>
                <div className='final'>
                    <span>Товары</span>
                    <span></span>
                    <span>1135$</span>
                </div>
                <div className='full-price'>
                    <span>Итого:</span>
                    <h2>1135$</h2>
                </div>
                <button>Оформить заказ</button>
            </div>
        </div>
    );
}

export default CartList;