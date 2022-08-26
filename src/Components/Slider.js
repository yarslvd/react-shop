import { Carousel } from "react-bootstrap";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/slider.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/slider.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./img/slider.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;