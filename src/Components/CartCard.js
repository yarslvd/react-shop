import { useState } from 'react';

function CartCard(props) {
    const { card } = props;

    const [count, setCount] = useState(
        JSON.parse(localStorage.getItem(card.id + 'count')) || 1
    );
    const [price, setPrice] = useState(
        JSON.parse(localStorage.getItem(card.id + 'price')) || +card.price.slice(0, -1)
    );

    const plusItem = () => {
        count > 9 ? setCount(count) : setCount(count + 1);
        let initialPrice = +card.price.slice(0, -1);
        price === 10 * initialPrice ? setPrice(initialPrice * 10) : setPrice(initialPrice * (count + 1));
        localStorage.setItem(card.id + 'count', count > 9 ? JSON.stringify(count) : JSON.stringify(count + 1));
        localStorage.setItem(card.id + 'price', price === 10 * initialPrice ? JSON.stringify(price) : JSON.stringify(price + initialPrice));
    }

    const minusItem = () => {
        count <= 1 ? setCount(count) : setCount(count - 1);
        let initialPrice = +card.price.slice(0, -1);
        price === initialPrice ? setPrice(initialPrice) : setPrice(price - initialPrice);
        localStorage.setItem(card.id + 'count', JSON.stringify(count - 1));
        localStorage.setItem(card.id + 'price', JSON.stringify(price - initialPrice));
    }

    const deleteItem = () => {
        console.log(card.id);
        window.localStorage.removeItem(card.id + 'cart');
        window.localStorage.removeItem(card.id + 'price');
        window.localStorage.removeItem(card.id + 'count');
        window.location.reload();
    }



    return (
        <>
        <div className="cart-item">
            <img src={card.img} alt = 'Card'/>
            <span className="card-name">{card.name}</span>
            <span className="card-price">{card.price}</span>
            <div className="quantity">
                <button onClick={minusItem}>-</button>
                <span className='itemsCount'>{count}</span>
                <button onClick={plusItem}>+</button>
            </div>
            <span className='final-price'>{price}$</span>
            <button onClick={deleteItem}><img src='./img/trash.svg' className='icon' alt='Delete item'/></button>
        </div>
        </>
    )
}


function getTotalPrice(price) {
    return price;
}

export { CartCard, getTotalPrice };