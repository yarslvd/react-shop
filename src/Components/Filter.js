import Form from 'react-bootstrap/Form';

function FilterItem(props) {
    const { prop, handler } = props;

    const propEl = prop.el.map(el => 
        <div key={el} className="mb-3">
            <Form.Check
                type='checkbox'
                id={el}
                label={el}
                onChange={handler}
            />
        </div>
    )

    return (
        <Form.Group className="mb-3 filterGroup">
            <h6>{prop.name}</h6>
            {propEl}
        </Form.Group>
    )
}

function Filter(props) {
    let { prop, handler } = props;
    const filter = prop.map((prop) =>
        <FilterItem prop = {prop} handler = {handler}/>
    )

    return (
        <Form className='form'>
            {filter}
        </Form>
    )
}

export default Filter;