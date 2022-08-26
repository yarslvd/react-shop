import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {
    const { card } = props;
    let [changeLike, setChangeLike] = useState(
        JSON.parse(localStorage.getItem(card.id + 'like')) || false
    );
    let [changeShop, setChangeShop] = useState(
        JSON.parse(localStorage.getItem(card.id + 'cart')) || false
    );

    const like = () => {
        localStorage.setItem(card.id + 'like', JSON.stringify(!changeLike));
        return setChangeLike(!changeLike);
    }

    const shop = () => {
        localStorage.setItem(card.id + 'cart', JSON.stringify(!changeShop));
        return setChangeShop(!changeShop);
    }

    return (
        <Card style={{ width: '245px', height: '430px' }}>
            <div class="card-header">
                <Button variant='btn-default' onClick={() => like()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={changeLike ? '#CFA5A5' : 'none'} stroke="#CFA5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </Button>
                <Button variant='btn-default'>
                    <img src='./img/info.svg' alt='More info'/>
                </Button>
            </div>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                    <div className='colors'>
                        <Circle bg = '#696837'/>
                        <Circle bg = '#81292F'/>
                        <Circle bg = '#D8C1AA'/>
                        <Circle bg = '#EED53A'/>
                        +5
                    </div>
                    <span className='price'>{card.price}</span>
                </Card.Text>
                <Button variant="primary" onClick={() => {shop()}} style={{backgroundColor: changeShop ? '#CFA5A5' : 'transparent', color: changeShop ? '#fff' : '#CFA5A5'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={changeShop ? '#fff' : 'none'} stroke = {changeShop ? '#CFA5A5' : 'currentColor'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    {changeShop ? 'В корзинe' : 'В корзину'}
                </Button>
            </Card.Body>
        </Card>
    );
}

function Circle(props) {
    return (
        <div className="circle" style={{backgroundColor: props.bg}}></div>
    );
}

export default ItemCard;