import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledWrapper className={isVisible ? "show" : ""}>
      <button className="button" onClick={scrollToTop}>
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

// Styled components
const StyledWrapper = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  .button {
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
    background-color: #111827;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.5s;
    background-color: #111827;
    align-items: center;
  }

  .button:hover .svgIcon {
    transition-duration: 0.3s;
    transform: translateY(-230%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 15px;
    bottom: unset;
    opacity: 1;
    transition-duration: 0.5s;
  }
`;

export default Button;
