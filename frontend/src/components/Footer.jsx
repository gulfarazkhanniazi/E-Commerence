import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function FooterComponent() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-800">
      <div className=" flex flex-col gap-1">
      <hr />
      <hr /></div>
      <Footer bgDark container>
        <div className="w-full">
          <div className="footer mt-8">
            <div className="w-full sm:w-1/3">
            <Link to="/" onClick={scrollToTop}>
              <img
                className="w-20 h-20" // Adjust size as needed
                src="https://cdn.worldvectorlogo.com/logos/svg-2.svg"
                alt="Logo"
              /></Link>
              <h2 className="text-3xl text-white mt-6">Gul Faraz Khan</h2>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 w-full sm:w-2/3">
              <div className="w-full sm:w-1/3">
                <Footer.Title
                  title="Quick Links"
                  className="text-lg text-white"
                />
                <Footer.LinkGroup col>
                  <Link
                    to="/"
                    onClick={scrollToTop}
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    onClick={scrollToTop}
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/collections/mens"
                    onClick={scrollToTop}
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Men&apos;s Collection
                  </Link>
                  <Link
                    to="/collections/women"
                    onClick={scrollToTop}
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Women&apos;s Collection
                  </Link>
                  <Link
                    to="/blogs"
                    onClick={scrollToTop}
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Blogs
                  </Link>
                </Footer.LinkGroup>
              </div>
              <div className="w-full sm:w-1/3">
                <Footer.Title title="Legal" className="text-lg text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="#"
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                    href="#"
                    className="text-lg hover:underline text-gray-400 hover:text-gray-500"
                  >
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="w-full sm:w-1/3">
                <Footer.Title
                  title="Contact Details"
                  className="text-lg text-white"
                />
                <Footer.LinkGroup col>
                  <p className="text-lg flex items-center text-gray-400">
                    <BsTelephoneFill className="mr-2" /> Phone: 0305 6344722
                  </p>
                  <p className="text-lg flex items-center hover:underline text-gray-400">
                    <MdEmail className="mr-2" /> Email: info@Faraz.online
                  </p>
                  <p className="text-lg flex items-center text-gray-400">
                    <BsGeoAltFill className="mr-2" /> Address: Wah Cantt Taxila
                  </p>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full text-center">
            <Footer.Copyright
              className="text-md text-gray-400"
              href="/"
              by="Faraz Company®"
              year={new Date().getFullYear()}
            />
          </div>
        </div>
      </Footer>
    </div>
  );
}
