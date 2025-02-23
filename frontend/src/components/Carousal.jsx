import { Carousel } from "flowbite-react";

export default function Carousal() {
  return (
    <div className="carousal-container w-full"> {/* Full width & height */}
      <Carousel pauseOnHover slideInterval={2000} className="h-full w-full">
        <img
          src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
          alt="..."
          className="carousel-img w-full h-full"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/974/544/non_2x/e-commerce-set-icon-symbol-template-for-graphic-and-web-design-collection-logo-illustration-vector.jpg"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq"
          alt="..."
          className="carousel-img"
        />
        <img
          src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
          alt="..."
          className="carousel-img"
        />
      </Carousel>
    </div>
  );
}
