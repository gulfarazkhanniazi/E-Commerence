import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  // Add your images here of 800 x 400 resolution for better performance
  "https://thumbs.dreamstime.com/b/branding-ecommerce-sales-website-marketing-flat-design-banner-illustration-showing-online-concept-e-business-to-purchase-103949402.jpg",
  "https://thumbs.dreamstime.com/b/flat-design-illustration-concept-e-commerce-web-banner-promotional-material-50224266.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs92pw2bZhqNL90whZRT7lsNpeusXZa5QTYg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIZqNedBxAu5rauIx9jEghhSGFH4D0OMF1A&s",
];

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="outline-none">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-[500px] md:h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
