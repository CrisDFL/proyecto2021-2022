import { FC } from 'react';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import DataImages from './dataImages';

const Slice: FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="containerSlice">
      <h1 className="titleSlice">Nuestros Ejemplares</h1>
      <Slider {...settings}>
        {DataImages.map((item) => (
        <div className="card">
          <div className="card-top">
            <img src={item.img} alt={item.title}/>
            <h1>{item.title}</h1>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slice;
