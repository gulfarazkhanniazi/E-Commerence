import { toast } from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFistName = (e) => {
    let v = e.target.value.replace(/\s/g, ""); // Remove spaces if pasted
    setFirstName(v);
  };
  const handleLastName = (e) => {
    let v = e.target.value.replace(/\s/g, ""); // Remove spaces if pasted
    setLastName(v);
  };
  const handleEmail = (e) => {
    let value = e.target.value.replace(/\s/g, ""); // Remove spaces if pasted
    setEmail(value);
  };
  const handlePhoneNumber = (e) => {
    let value = e.target.value;
  
    // Allow only numbers and the '+' sign
    if (!/^[0-9+]*$/.test(value)) return;
  
    setPhoneNumber(value);
  };
  
  const handleMessage = (e) => {
    let value = e.target.value;
    if (value.startsWith(" ")) return; // Prevent leading spaces
    setMessage(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Reset errors before submission
  
    // Basic client-side validation
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      toast.error("All fields are required.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/email/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({firstName,
          lastName,
          email,
          phoneNumber,
          message}),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }
  
      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
  
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <StyledWrapper className="mt-14 rela">
      {
        errors && (
          Object.values(errors).map((error) => toast.error(error))
        )
      }
      <div className="landing_page">
        <div className="responsive-container-block big-container">
          <img
            className="bg-img"
            id="iq5bf"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"
            alt="Background"
          />
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
              <div className="content-box">
                <p className="text-blk section-head">Get In Touch</p>
                <p className="text-blk section-subhead text-lg">
                  Have questions or need assistance? Our team is here to help.
                  Contact us for inquiries about our products, services, or
                  business collaborations. We’re happy to assist you!
                </p>
                <div className="card">
                  <Link className="socialContainer containerOne" to="#">
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </Link>

                  <Link className="socialContainer containerTwo" to="#">
                    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </Link>

                  <Link className="socialContainer containerThree" to="#">
                    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </Link>

                  <Link className="socialContainer containerFour" to="#">
                    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one"
              id="i1zj"
            >
              <form className="form-box" onSubmit={handleSubmit}>
                <div className="container-block form-wrapper">
                  <p className="text-blk contactus-head text-center">
                    Get a Quote
                  </p>
                  <p className="text-blk contactus-subhead text-center">
                    Let us know your requirements, and we’ll get back to you
                    within 24 hours with a tailored solution.
                  </p>
                  <div className="responsive-container-block">
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i10mt-7"
                    >
                      <input
                        className="input"
                        id="ijowk-7"
                        name="FirstName"
                        placeholder="First Name" minLength={3} maxLength={10}
                        value={firstName}
                        onChange={handleFistName}
                        onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevents space key from being typed
                        required
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i1ro7"
                    >
                      <input
                        className="input"
                        id="indfi-5"
                        name="LastName"
                        placeholder="Last Name" minLength={3} maxLength={10}
                        value={lastName}
                        onChange={handleLastName}
                        onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevents space key from being typed
                        required
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial"
                      id="ityct"
                    >
                      <input
                        className="input"
                        id="ipmgh-7"
                        name="Email"
                        type="email"
                        placeholder="Email" maxLength={30}
                        value={email}
                        onChange={handleEmail}
                        onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevents space key from being typed
                        required
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input
                        className="input"
                        id="imgis-6"
                        name="PhoneNumber"
                        type="tel"
                        placeholder="Phone Number" minLength={8} maxLength={18}
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevents space key from being typed
                        required
                      />
                    </div>
                    <div
                      className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                      id="i634i-7"
                    >
                      <textarea
                        className="textinput"
                        id="i5vyy-7"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={handleMessage}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button disabled={loading} className="btn mb-4" type="submit">{loading ? "Sending..." : "Get Quote"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

// Styled components
const StyledWrapper = styled.div`
  /* From Uiverse.io by 0800Gonza */
  .card {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    // background-color: #111827;
    border: 2px solid #ddd;
    transition-duration: 1s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128c7e;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .btn {
    font-size: 1.2rem;
    width: 100%;
    height: 56px;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 20px #ffc800;
    -webkit-box-reflect: below 10px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: #146132;
    border-right-color: #146132;
    border-bottom-color: #146132;
    border-left-color: #146132;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    transition: all 1s ease-in-out;
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    // background: #ffc800;
    background: linear-gradient(270deg, #f4da7d 0%, #ffc800 100%);
    color: rgb(4, 4, 38);
  }

  .landing_page * {
    font-family: Nunito, sans-serif;
  }

  .landing_page .responsive-container-block {
    min-height: 75px;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    justify-content: flex-start;
  }

  .landing_page .text-blk {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    line-height: 25px;
  }

  .landing_page .responsive-cell-block {
    min-height: 75px;
  }

  .landing_page .responsive-container-block.container {
    max-width: 1320px;
    margin-top: 60px;
    margin-right: auto;
    margin-bottom: 60px;
    margin-left: auto;
    position: relative;
  }

  .landing_page .form-box {
    background-color: #151617;
    color: white;
    padding-top: 35px;
    padding-right: 33px;
    padding-bottom: 35px;
    padding-left: 33px;
    max-width: 506px;
  }

  .landing_page .text-blk.contactus-head {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 1rem;
  }

  .landing_page .text-blk.contactus-subhead {
    color: #d4d4d4;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 18px;
    margin-left: 0px;
  }

  .landing_page .input {
    width: 100%;
    height: 50px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 18px;
    padding-top: 1px;
    padding-right: 125px;
    padding-bottom: 1px;
    padding-left: 22.5px;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: #767676;
    border-right-color: #767676;
    border-bottom-color: #767676;
    border-left-color: #767676;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    background-color: #212223;
    padding: 1px 12.5px 1px 22.5px;
  }

  .landing_page .textinput {
    width: 100%;
    height: 233px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 20px;
    margin-left: 0px;
    font-size: 18px;
    padding-top: 22px;
    padding-right: 22px;
    padding-bottom: 22px;
    padding-left: 22px;
    background-color: #212223;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: #767676;
    border-right-color: #767676;
    border-bottom-color: #767676;
    border-left-color: #767676;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
  }

  .landing_page
    .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-6.emial {
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .landing_page
    .responsive-cell-block.wk-ipadp-6.wk-tab-12.wk-mobile-12.wk-desk-6.right-one {
    display: flex;
    justify-content: center;
  }

  .landing_page
    .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12.left-one {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
  }

  .landing_page .text-blk.section-subhead {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
    max-width: 420px;
    font-size: 18px;
    color: #b6b6b6;
  }

  .landing_page .text-blk.section-head {
    font-size: 40px;
    line-height: 55px;
    font-weight: 800;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
    max-width: 450px;
  }

  .landing_page .icons-container {
    max-width: 450px;
    display: flex;
    justify-content: space-evenly;
  }

  .landing_page .img {
    width: 31px;
    height: 31px;
  }

  .landing_page .responsive-container-block.big-container {
    background-color: black;
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 0px;
    padding-left: 50px;
    position: relative;
  }

  .landing_page .bg-img {
    width: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .landing_page
      .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12.left-one {
      justify-content: center;
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 30px;
      margin-left: 0px;
    }

    .landing_page
      .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-6.emial {
      padding-top: 0px;
      padding-right: 0px;
      padding-bottom: 0px;
      padding-left: 0px;
    }

    .landing_page
      .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12.left-one {
      margin: 0 0 40px 0;
    }
  }

  @media (max-width: 500px) {
    .landing_page .text-blk.section-head {
      font-size: 26px;
      line-height: 40px;
    }

    .landing_page .responsive-container-block.big-container {
      padding-top: 0px;
      padding-right: 20px;
      padding-bottom: 0px;
      padding-left: 20px;
    }

    .landing_page .text-blk.section-subhead {
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 30px;
      margin-left: 0px;
      font-size: 16px;
    }

    .landing_page .form-box {
      padding-top: 30px;
      padding-right: 15px;
      padding-bottom: 30px;
      padding-left: 15px;
    }

    .landing_page
      .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12.left-one {
      margin: 0 0 30px 0;
    }

    .landing_page .input {
      height: 45px;
    }

    .landing_page .text-blk.contactus-head {
      font-size: 24px;
      line-height: 34px;
    }
  }
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&amp;display=swap");

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .wk-desk-1 {
    width: 8.333333%;
  }

  .wk-desk-2 {
    width: 16.666667%;
  }

  .wk-desk-3 {
    width: 25%;
  }

  .wk-desk-4 {
    width: 33.333333%;
  }

  .wk-desk-5 {
    width: 41.666667%;
  }

  .wk-desk-6 {
    width: 50%;
  }

  .wk-desk-7 {
    width: 58.333333%;
  }

  .wk-desk-8 {
    width: 66.666667%;
  }

  .wk-desk-9 {
    width: 75%;
  }

  .wk-desk-10 {
    width: 83.333333%;
  }

  .wk-desk-11 {
    width: 91.666667%;
  }

  .wk-desk-12 {
    width: 100%;
  }

  @media (max-width: 1024px) {
    .wk-ipadp-1 {
      width: 8.333333%;
    }

    .wk-ipadp-2 {
      width: 16.666667%;
    }

    .wk-ipadp-3 {
      width: 25%;
    }

    .wk-ipadp-4 {
      width: 33.333333%;
    }

    .wk-ipadp-5 {
      width: 41.666667%;
    }

    .wk-ipadp-6 {
      width: 50%;
    }

    .wk-ipadp-7 {
      width: 58.333333%;
    }

    .wk-ipadp-8 {
      width: 66.666667%;
    }

    .wk-ipadp-9 {
      width: 75%;
    }

    .wk-ipadp-10 {
      width: 83.333333%;
    }

    .wk-ipadp-11 {
      width: 91.666667%;
    }

    .wk-ipadp-12 {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .wk-tab-1 {
      width: 8.333333%;
    }

    .wk-tab-2 {
      width: 16.666667%;
    }

    .wk-tab-3 {
      width: 25%;
    }

    .wk-tab-4 {
      width: 33.333333%;
    }

    .wk-tab-5 {
      width: 41.666667%;
    }

    .wk-tab-6 {
      width: 50%;
    }

    .wk-tab-7 {
      width: 58.333333%;
    }

    .wk-tab-8 {
      width: 66.666667%;
    }

    .wk-tab-9 {
      width: 75%;
    }

    .wk-tab-10 {
      width: 83.333333%;
    }

    .wk-tab-11 {
      width: 91.666667%;
    }

    .wk-tab-12 {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .wk-mobile-1 {
      width: 8.333333%;
    }

    .wk-mobile-2 {
      width: 16.666667%;
    }

    .wk-mobile-3 {
      width: 25%;
    }

    .wk-mobile-4 {
      width: 33.333333%;
    }

    .wk-mobile-5 {
      width: 41.666667%;
    }

    .wk-mobile-6 {
      width: 50%;
    }

    .wk-mobile-7 {
      width: 58.333333%;
    }

    .wk-mobile-8 {
      width: 66.666667%;
    }

    .wk-mobile-9 {
      width: 75%;
    }

    .wk-mobile-10 {
      width: 83.333333%;
    }

    .wk-mobile-11 {
      width: 91.666667%;
    }

    .wk-mobile-12 {
      width: 100%;
    }
  }
`;