import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "./assets/ShopEase.jpg",
    "./assets/new arrivals.jpg",
    "./assets/jewellery.jpg",
    "./assets/electronics.jpg",
  ];

  return (
    <>
      <div className="hero border-1 pb-3">
        <Slider {...settings} className="mx-1 my-1">
          {images.map((image, index) => (
            <div key={index} className="card bg-dark text-white border-0">
              <img
                className="card-img img-fluid"
                src={image}
                alt={`Slide ${index}`}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
