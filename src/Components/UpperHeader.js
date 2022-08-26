function UpperHeader() {
    return (
        <div className="upperHeader">
            <div className="item">
                <img src="./img/phone.svg" alt="Phone icon"/>
                <span>+1 (824) 765 28 20</span>
            </div>
            <div className="item">
                <img src="./img/location.svg" alt="Location icon"/>
                <span>г. Киев, ул. Петра Алексеева, д. 6</span>
            </div>
            <div className="item">
                <img src="./img/hours.svg" alt="Hours icon"/>
                <span>Ежедневно с 10:00 до 19:00</span>
            </div>
        </div>
    );
}

function BgHeader() {
    return (
        <div className="bgHeader"></div>
    );
}


export { BgHeader, UpperHeader }