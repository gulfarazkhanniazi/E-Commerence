import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Card() {
  return (
<Link to="/item/slug" className="flex justify-center items-center min-h-screen py-4 cursor-pointer">
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
            <StyledWrapper><div className="flex justify-between gap-2">
      <button className="buyBtn">
        <svg className="cart" fill="#000" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
        Buy Now
      </button>
      <button className="cartBtn">
        <svg className="cart" fill="black" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        ADD TO CART
      </button></div>
    </StyledWrapper>
            </div>
        </div>
    </div>
</Link>
  )
}



const StyledWrapper = styled.div`
.buyBtn {
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
    font-weight: 400;
    position: relative;
    // background: linear-gradient(270deg,#f4da7d 0%, #ffc800 100%);
    box-shadow: 0 1.25rem 1.875rem -0.4375rem rgba(27, 27, 27, 0.219);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    overflow: hidden;
}

.cart {
    z-index: 2;
}

.buyBtn:active, cartBtn:active {
    transform: scale(0.96);
}

.cartBtn:hover .cart, .buyBtn:hover .cart {
    animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-1.5rem);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
`;
