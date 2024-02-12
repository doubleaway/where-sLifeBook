import React from "react";
import "../Style/Css/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="homeSec">
            <div className="introImage">
                <div className="backgroundDark">
                    <p>인생 도서를 찾기 위한  </p>
                    <p>당신의 어플리케이션</p>
                    <p className="title">Where's Life Book</p>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="item_1">
                        <h3>1</h3>
                    </div>
                    <div className="item_1">
                        <h3>2</h3>
                    </div>
                    <div className="item_1">
                        <h3>3</h3>
                    </div>
                    <div className="item_1">
                        <h3>4</h3>
                    </div>
                    <div className="item_1">
                        <h3>5</h3>
                    </div>
                    <div className="item_1">
                        <h3>6</h3>
                    </div>
                    <div className="item_1">
                        <h3>7</h3>
                    </div>
                    <div className="item_1">
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Home