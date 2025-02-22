import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ShoppindItem() {
  const { slug } = useParams(); // Extract the slug from the URL
  console.log(slug);

  // Use useEffect to scroll to the top when the slug changes
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"}); // Scroll to the top when the component mounts
  }, [slug]);

  return (
    <div className="bg-gray-800" style={{ "paddingTop": "8rem", "paddingBottom": "3rem" }}>
      <div className="max-w-4xl mx-auto bg-gray-700 text-gray-300 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center md:flex-row">
          {/* <!-- Product Image --> */}
          <div className="md:w-1/3 p-4">
            <div className=" ">
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                alt="HP Victus Laptop"
                className="w-60 h-40 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* <!-- Product Details --> */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-2xl font-bold text-gray-200 mb-2">
              HP Victus Gaming Laptop
            </h1>
            <p className="text-sm mb-4">
              Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4
              GB Graphics/NVIDIA GeForce RTX 2050)
            </p>

            <div className="flex items-center mb-4">
              <span className="bg-gray-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                4.5 ★
              </span>
            </div>

            <ul className="text-sm mb-6">
              <li className="flex items-center mb-1">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Core i5 Processor (12th Gen)
              </li>
              <li className="flex items-center mb-1">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                8 GB DDR4 RAM
              </li>
              <li className="flex items-center mb-1">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Windows 11 Home
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                512 GB SSD
              </li>
            </ul>

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-3xl font-bold text-gray-100">
                  $899.00
                </span>
                <span className="ml-2 text-sm font-medium text-gray-400 line-through">
                  $1,000.00
                </span>
              </div>
              <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Save 10%
              </span>
            </div>

            <p className="text-blue-600 text-sm font-semibold mb-4">
              Free Delivery
            </p>

            <div className="flex space-x-4">
              <button className="flex-1 bg-yellow-300 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                Buy Now
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
