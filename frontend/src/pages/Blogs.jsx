import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Blogs() {
  return (
    <div className="bg-gray-800 text-gray-300 mt-10 p-5"><br /><br /><br />
      <h1 className="text-4xl text-center font-bold">Our Blogs</h1>
      <StyledWrapper>
        {[1, 2, 3, 4, 5].map((id) => (
          <Link key={id} to={`/blogs/${id}`} className="card-link">
            <div className="card">
              <img
                className="w-full h-full"
                src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                alt=""
              />
              <div className="card__content">
                <p className="card__title">Card Title {id}</p>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem; /* Increased gap between cards */
  padding: 2rem;

  .card-link {
    text-decoration: none;
    width: 100%;
    max-width: 60rem; /* Increased width */
  }

  .card {
    position: relative;
    width: 100%;
    height: 27rem; /* Increased height */
    background-color: #f2f2f2;
    border-radius: 1rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 0.5rem rgba(255, 255, 255, 0.5);
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    box-sizing: border-box;
    background: transparent;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 2rem;
    color: #ddd;
    font-weight: 700;
  }

  .card__description {
    margin: 1rem 0 0;
    font-size: 1.2rem;
    color: #d1d5db;
    line-height: 1.6;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .card-link {
      max-width: 50rem;
    }

    .card {
      height: 28rem;
    }
  }

  @media (max-width: 768px) {
    .card-link {
      max-width: 90%;
    }

    .card {
      height: 25rem;
    }
  }

  @media (max-width: 480px) {
    .card-link {
      max-width: 95%;
    }

    .card {
      height: 22rem;
    }

    .card__title {
      font-size: 1.5rem;
    }

    .card__description {
      font-size: 1rem;
    }
  }
`;
