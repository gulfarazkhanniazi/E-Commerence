import styled from 'styled-components';

export default function Card() {
  return (
<div className="flex justify-center items-center min-h-screen py-4 cursor-pointer">
    <div className="max-w-[720px] mx-auto">

        {/* <!-- Centering wrapper --> */}
        <div className="relative flex flex-col text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-80">
            <div className="relative mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl h-96">
                <img
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                    alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Apple AirPods
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        $95.00 <span className="line-through ml-1">$100</span>
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </p>
            </div>
            <div className="p-6 pt-0">
            <StyledWrapper>
      <button className="cartBtn">
        <svg className="cart" fill="black" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        ADD TO CART
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="product" style={{ fill: "black" }}><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
      </button>
    </StyledWrapper>
            </div>
        </div>
    </div>
</div>
  )
}



const StyledWrapper = styled.div`
.cartBtn {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    color: #000;
    font-weight: 500;
    position: relative;
    background: linear-gradient(270deg,#f4da7d 0%, #ffc800 100%);
    box-shadow: 0 1.25rem 1.875rem -0.4375rem rgba(27, 27, 27, 0.219);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    overflow: hidden;
}

.cart {
    z-index: 2;
}

.cartBtn:active {
    transform: scale(0.96);
}

.product {
    position: absolute;
    width: 0.75rem;
    border-radius: 3px;
    content: "";
    left: 4.7rem;
    bottom: 1.4375rem;
    opacity: 0;
    z-index: 1;
    fill: rgb(211, 211, 211);
}

.cartBtn:hover .product {
    animation: slide-in-top 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-top {
    0% {
        transform: translateY(-2rem);
        opacity: 1;
    }

    100% {
        transform: translateY(0) rotate(-90deg);
        opacity: 1;
    }
}

.cartBtn:hover .cart {
    animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-2rem);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
`;
