import { useState } from 'react';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently open accordion
    } else {
      setActiveIndex(index); // Open the new accordion
    }
  };

  return (
    <section className="py-24">
        <hr />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-200">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold leading-[3.25rem] my-8">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group">
          {/* FAQ Item 1 */}
          <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8  w-full transition duration-500 hover:text-indigo-600"
              onClick={() => toggleAccordion(1)}
            >
              <h5>How can I reset my password?</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${activeIndex === 1 ? 'transform rotate-45' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 1 && (
              <div className="accordion-content w-full overflow-hidden pr-4">
                <p className="text-base font-normal leading-6 mt-4">
                  To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8  w-full transition duration-500 hover:text-indigo-600"
              onClick={() => toggleAccordion(2)}
            >
              <h5>How do I update my billing information?</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${activeIndex === 2 ? 'transform rotate-45' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 2 && (
              <div className="accordion-content w-full overflow-hidden pr-4">
                <p className="text-base font-normal leading-6 mt-4">
                  To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 hover:text-indigo-600"
              onClick={() => toggleAccordion(3)}
            >
              <h5>How can I contact customer support?</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${activeIndex === 3 ? 'transform rotate-45' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 3 && (
              <div className="accordion-content w-full overflow-hidden pr-4">
                <p className="text-base font-normal leading-6 mt-4">
                  To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8  w-full transition duration-500 hover:text-indigo-600"
              onClick={() => toggleAccordion(4)}
            >
              <h5>How do I delete my account?</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${activeIndex === 4 ? 'transform rotate-45' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {activeIndex === 4 && (
              <div className="accordion-content w-full overflow-hidden pr-4">
                <p className="text-base font-normal leading-6 mt-4">
                  To create an account, find the Sign up or Create account button, fill out the registration form with your personal information, and click Create account or Sign up. Verify your email address if needed, and then log in to start using the platform.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
