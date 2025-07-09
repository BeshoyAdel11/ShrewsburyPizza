import logo from "/src/assets/images/footer-Images/logo1.svg";
import phone from "/src/assets/images/footer-Images/phone.svg";
import fmarker from "/src/assets/images/footer-Images/fmarker.svg";
import enelope from "/src/assets/images/footer-Images/envelope.svg";
import instagram from "/src/assets/images/footer-Images/brands-instagram.svg";
import twitter from "/src/assets/images/footer-Images/brands-twitter.svg";
import youtube from "/src/assets/images/footer-Images/brands-youtube.svg";
import facebook from "/src/assets/images/footer-Images/facebook.svg";
import pay from "/src/assets/images/footer-Images/pay.svg";
import discover from "/src/assets/images/footer-Images/discover.svg";
import paypal from "/src/assets/images/footer-Images/paypal.svg";
import mastercard from "/src/assets/images/footer-Images/mastercard.svg";
import visa from "/src/assets/images/footer-Images/visa.svg";
import usa from "/src/assets/images/footer-Images/amiracen.svg";

function Footer() {
  return (
    <section className="bg-[#212121] w-full h-auto">
      <div className="container pt-[30px] mx-auto min-h-[600px]">
        <div className="w-[129px] h-[129px] my-[50px]">
          <img src={logo} className="w-full object-contain"></img>
        </div>
        <div className="flex justify-between  flex-col sm:flex-row gap-[40px] md:gap-[40px]">
          <div className="w-[341px]   max-w-full  text-[#FFFFFF] ">
            <ul className="flex flex-col  w-full flex-wrap gap-[24px] md:gap-[32px]">
              <li className="flex  items-center gap-[10px] ">
                <img
                  src={fmarker}
                  className="w-[27px] h-[27px] sm:w-[20px] sm:h-[20px] lg:w-[27px] lg:h-[27px]"
                ></img>
                <p className="font-[500] text-[20px] leading-[30px] sm:font-[500] sm:text-[14px] sm:leading-[21px] lg:font-[500] lg:text-[20px] lg:leading-[30px] ">
                  424 Hartford Turnpike, Shrewsbury, MA 01545
                </p>
              </li>
              <li className="flex gap-[10px] items-center">
                <img
                  src={enelope}
                  className="w-[27px] h-[27px] sm:w-[20px] sm:h-[20px] lg:w-[27px] lg:h-[27px]"
                ></img>
                <p className="text-wrap font-[500] text-[18px] leading-[27px] sm:font-[500] sm:text-[14px] sm:leading-[21px] lg:font-[500] lg:text-[18px] lg:leading-[27px] ">
                  424 Hartford Turnpike, Shrewsbury, MA 01545
                </p>
              </li>
              <li className="flex gap-[10px] items-center">
                <img
                  src={phone}
                  className="w-[27px] h-[27px] sm:w-[20px] sm:h-[20px] lg:w-[27px] lg:h-[27px]"
                ></img>{" "}
                <p className="font-[500] text-[20px] leading-[30px] sm:font-[500] sm:text-[14px] sm:leading-[21px] lg:font-[500] lg:text-[20px] lg:leading-[30px]">
                  5087198285 - 5087198285{" "}
                </p>
              </li>
            </ul>
          </div>

          <div className=" text-[#FFFFFF] w-[149px]  max-w-full lg:gap-[32px] gap-[24px]">
            <ul className="flex flex-col gap-[20px] md:gap-[25px] font-[500] text-[20px] leading-[19.4px]">
              <li>
                <a className="font-[600] text-[24px] leading-[23.28px] sm:font-[600] sm:text-[15px] sm:leading-[14.55px] lg:font-[600] lg:text-[24px] lg:leading-[23.28px]">
                  Quick links
                </a>
              </li>
              <li>
                <a className="font-[500] text-[20px] leading-[19.4px] sm:font-[500] sm:text-[14px] sm:leading-[13.58px] lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Home
                </a>
              </li>
              <li>
                <a className="font-[500] text-[20px] leading-[19.4px] sm:font-[500] sm:text-[14px] sm:leading-[13.58px] lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Menu
                </a>
              </li>
              <li>
                <a className="font-[500] text-[20px] leading-[19.4px] sm:font-[500] sm:text-[14px] sm:leading-[13.58px]  lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Gift Card
                </a>
              </li>
              <li>
                <a className="font-[500] text-[20px] leading-[19.4px] sm:font-[500] sm:text-[14px] sm:leading-[13.58px]  lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[328px] max-w-full text-white">
            <ul className="flex flex-col gap-[38px] ">
              <li>
                <h4 className="font-[600] text-[24px] leading-[23.28px] sm:font-[600] sm:text-[15px] sm:leading-[14.55px] lg:font-[600] lg:text-[24px] lg:leading-[23.28px]">
                  Opening hours
                </h4>
              </li>
              <li>
                <h4 className="font-[500] text-[20px] leading-[19.4px] sm:font-[500] sm:text-[14px] sm:leading-[13.58px] lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Monday - Saturday:{" "}
                  <span className="text-[#00833F]">10AM - 9PM</span>
                </h4>
              </li>
              <li>
                <h4 className="font-[500] text-[20px] leading-[19.4px]  sm:font-[500] sm:text-[14px] sm:leading-[13.58px]  lg:font-[500] lg:text-[20px] lg:leading-[19.4px]">
                  Sunday :<span className="text-[#00833F]"> Closed</span>
                </h4>
              </li>
              <li>
                <div className="flex justify-between gap-[10px] items-center max-w-full flex-wrap w-[158px]">
                  <img src={facebook}></img>
                  <img src={twitter}></img>
                  <img src={instagram}></img>
                  <img src={youtube}></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  md:px-[20px] bg-[#ffffff1f] h-[108px] md:h-[87px] md:p-[0px_48px_0px_48px] rounded-[24px] p-[10px] text-white my-[30px]">
          <ul className="w-full flex min-h-[87px] justify-between gap-[12px] items-center flex-col md:flex-row  ">
            <li>
              <p className="font-[500] text-[12px] leading-[18px]  sm:font-[700] sm:text-[18px] sm:leading-[24px]">
                <span className="font-[700] text-[12px] leading-[18px]  sm:font-[500] sm:text-[14px] sm:leading-[21px]">
                  ©2024{" "}
                </span>{" "}
                Shrewsbury House of Pizza
                <span className="font-[700] text-[12px] leading-[18px]  sm:font-[500] sm:text-[14px] sm:leading-[21px]">
                  All rights reserved
                </span>
              </p>
            </li>
            <li className="">
              <div className="flex-wrap flex items-center gap-[5px]  ">
                <img src={pay}></img>
                <img src={discover}></img>
                <img src={paypal}></img>
                <img src={mastercard}></img>
                <img src={visa}></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
