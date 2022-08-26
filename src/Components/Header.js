import { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    let items = [];
    useEffect(() => {
        let values = Object.entries(localStorage);

        for(let el of values) {
            if(el[0].slice(-4) === 'like') {
                if(el[1] === 'true') {
                    items.push(el);
                }
            }
        }
    });


    return(
        <Navbar expand="xxl">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav1">
                    <Nav.Link href="#home">Каталог</Nav.Link>
                    <Nav.Link href="#link">Оплата и доставка</Nav.Link>
                    <Nav.Link href="#link">Бонусная программа</Nav.Link>
                    <Nav.Link href="#link">О компании</Nav.Link>
                    <Nav.Link href="#link">Контакты</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
                <a href='/'><img src="./img/logo.png" alt="Hobby Art Logo" /></a>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav2">
                    <Nav.Item href="#link">
                        <label>
                            <input type="text" placeholder="Поиск товара" />
                        </label>
                    </Nav.Item>
                    <Nav.Item href="#link">
                        <Button text='Войти' path='./img/login.svg'/>
                    </Nav.Item>
                    <Nav.Item href="#link">
                        <Button text='Избранное' path='./img/fav.svg' items = {items.length}/>
                    </Nav.Item>
                    <Nav.Item href="#link">
                        <Button text='Корзина' path='./img/bin.svg'/>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

function Button(props) {
    return(
        <a href="/">
            <div class="nav-btn">
                <img src={props.path} alt='Search'/>
                {props.text}
                <p></p>
                <div className="circle" style={{backgroundColor: '#000', display: 'none'}}></div>
            </div>
        </a>
    )
}

export default Header;