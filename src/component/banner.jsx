import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/banner5.png";
import toggle from "../assets/images/toggle.png";

const Banner = () => {
  // Images and corresponding text content
  const images = [
    {
      src: banner1,
      alt: "Image 1",
      description: "Get an extra 5% to 30% bonus on every trade! 🎉",
    },
    {
      src: banner2,
      alt: "Image 2",
      description: "ETH Color Prediction: Exclusive Deposit Promotion",
    },
    {
      src: banner4,
      alt: "Image 4",
      description: "Register now and win iPhone15pro immediately!",
    },
    {
      src: banner5,
      alt: "Image 5",
      description: "📢 New to CoinRyze? Check here!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container-fluid image-swipe-box mb-4 p-0">
      <Carousel
        activeIndex={currentIndex}
        onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
        interval={3000}
        pause="hover"
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.description}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="description d-flex pt-2  justify-content-between p-2 ">
        <button className=" btn border rounded-pill "> News</button>

        <img src={toggle} alt="image" />
      </div>
    </div>
  );
};

export default Banner;
