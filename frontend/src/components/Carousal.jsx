import { Carousel } from "flowbite-react";

export default function Carousal() {
  return (
    <div className="carousal-container w-full"> {/* Full width & height */}
      <Carousel pauseOnHover slideInterval={3000} className="h-full w-full">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
          className="carousel-img"
        />
      </Carousel>
    </div>
  );
}
