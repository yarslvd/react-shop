import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Filter from './Filter';
import CardsList from './CardsList';
import cardInfo from './fixtures';
import filterProps from './filterProps';

function Products() {
    const [checked, setChecked] = useState([]);
    let updatedList = [...checked];

    const handleCheck = (event) => {
        if (event.target.checked) {
          updatedList = [...checked, [event.target.id, event.target.value]];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return(
        <Container fluid className='products'>
            <Filter prop = {filterProps} handler = {handleCheck}/>
            <CardsList cards = {cardInfo} list = {updatedList}/>
        </Container>
    );
}

export default Products;