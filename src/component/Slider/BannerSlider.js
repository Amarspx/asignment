import React from "react";
import Slider from "react-slick";
import './slick-slider.css';

const BannerSlider = () => {
    const settings = {
        dots: false,
        arrows:true,
        autoplay:true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="mb-3">

          <Slider {...settings}>
            <div>
                <div>
                  <img src={'https://via.placeholder.com/1800x450/0000FF/808080 ?Text=1'} alt='Banner' />
                </div>
            </div>
            <div>
                <div>
                  <img src={'https://via.placeholder.com/1800x450/FF0000/ffffff ?Text=1'} alt='Banner'  />
                </div>
            </div>
            <div>
                <div>
                  <img src={'https://via.placeholder.com/1800x450/aaaaaa/000000 ?Text=1'}  alt='Banner' />
                </div>
            </div>
            <div>
                <div>
                  <img src={'https://via.placeholder.com/1800x450/000000/ffffff ?Text=1'} alt='Banner' />
                </div>
            </div>          
          </Slider>
        </div>
    )
}

export default BannerSlider;

