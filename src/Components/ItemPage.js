import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from './Card';

function ItemPage(props) {
    let info;
    const {cards} = props;

    const getItem = () => {
        info = JSON.parse(Object.values(sessionStorage)[0]);
        console.log(info);
    }

    const [count, setCount] = useState(1);

    let [changeShop, setChangeShop] = useState();

    const plusItem = () => {
        count > 9 ? setCount(count) : setCount(count + 1);
    }

    const minusItem = () => {
        count <= 1 ? setCount(count) : setCount(count - 1);
    }

    const shop = () => {
        localStorage.setItem(info.id + 'cart', JSON.stringify(!changeShop));
        return setChangeShop(!changeShop);
    }

    const cardElements = cards.map(card => card.id === ('56c782f1e17f4f9311dfaa2c' && '56c782f1e17f4f9311dfaa2c') ? ' ': <Card key = {card.id} card = {card}/>);

    return (
        <>
            <div className='main'>
                {getItem()}
                <div className="left">
                    <img src={info.img} alt='Product'/>
                    <div className='colors'>
                        <Circle bg = '#696837'/>
                        <Circle bg = '#81292F'/>
                        <Circle bg = '#D8C1AA'/>
                        <Circle bg = '#EED53A'/>
                    </div>
                </div>
                <div className='right'>
                    <h3>{info.name}</h3>
                    <span>
                    Хлопковый шпагат для рукоделия 4 мм состоит из 100 тонких скрученных нитей. Для создания модных перьев (листьев), 
                    кисточек, панно, ловцов снов, брелков, украшений, салфеток, кашпо, наволочек и других изделий в технике макраме. Мягкий 
                    и приятный на ощупь, при желании, можно легко расплести в бахрому.
                    </span>
                    <div className='char'>
                        <h3>Xарактеристики</h3>
                        <div>
                            <h4>Длина</h4>
                            <span>100 м</span>
                        </div>
                        <div>
                            <h4>Производитель</h4>
                            <span>mordor</span>
                        </div>
                        <div>
                            <h4>Состав</h4>
                            <span>100% хлопок</span>
                        </div>
                        <div>
                            <h4>Толщина</h4>
                            <span>4 мм (100 нитей)</span>
                        </div>
                    </div>
                    <div className='price'>
                        <h3>{info.price}</h3>
                        <div className="quantity">
                            <button onClick={minusItem}>-</button>
                            <span className='itemsCount'>{count}</span>
                            <button onClick={plusItem}>+</button>
                        </div>
                        <Button variant="primary" onClick={() => {shop()}} className='btn'>
                            {changeShop ? 'В корзинe' : 'Добавить в корзину'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className='comments'>
                <h3>Отзывы</h3>
                <div className='items'>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
            <div className='proposal'>
                <h3>С этим покупают</h3>
                <Row md={4}>
                    {cardElements}
                </Row>
            </div>
        </>
    )
}

function Circle(props) {
    return (
        <div className="circle" style={{backgroundColor: props.bg}}></div>
    );
}

function Comment() {
    return (
        <div className='full'>
            <div className='comment-item'>
                <img src='./img/img.png' alt='logo' />
                <div className='info'>
                    <span>Евгения Доценко</span>
                    <img src='./img/stars.png' alt='review'/>
                </div>
                <span className='date'>13.06.2021 12:30</span>
            </div>
            <div>
                <span className='comment'>Комментарий: Хороший шпагат</span>
            </div>
        </div>
    )
}

export default ItemPage;