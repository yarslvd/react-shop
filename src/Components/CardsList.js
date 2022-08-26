import Row from 'react-bootstrap/Row';
import Card from './Card';


function CardList(props) {
    const { cards, list } = props;

    const cardElements = cards.map(card => 
        list.length === 0 ? <Card key = {card.id} card = {card}/> : list.map(p => p[0] === card.category ? <Card key = {card.id} card = {card}/> : null)
    )


    return (
        <Row md={4}>
            {cardElements}
        </Row>
    );
}

export default CardList;
