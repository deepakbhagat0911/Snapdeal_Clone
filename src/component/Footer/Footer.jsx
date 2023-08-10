import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#dcdcdc" }}>
        <div className="Footer-container">
          <div className="footerboxs">
            <div className="footer-text">
              <p>POLICY INFO</p>
              <div className="footer-items">
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms of Sale</li>
                  <li>Terms of Use</li>
                  <li>Report Abuse & Takedown Policy</li>
                  <li>Know Your BIS Standard</li>
                  <li>Products Under Cumpulsory BIS</li>
                </ul>
              </div>
            </div>
            <div className="footer-text">
              <p>COMPANY</p>
              <div className="footer-items">
                <ul>
                  <li>Impact@Snapdeal</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Sitemap</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="footer-text">
              <p>SNAPDEAL BUSINESS</p>
              <div className="footer-items">
                <ul>
                  <li>Shopping App</li>
                  <li>Sell on Snapdeal</li>
                  <li>Media Enquiries</li>
                </ul>
              </div>
            </div>
            <div className="footer-text">
              <p>POPULAR LINKS</p>
              <div className="footer-items">
                <ul>
                  <li>Lehenga</li>
                  <li>Kid's Clothing</li>
                  <li>Sarees</li>
                  <li>Winter Wear</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footerboxs method">
            <div className="footer-text pay">
              <p>PAYMENT</p>
              <img src={"./payment-img/card_img.png"} alt="" />
            </div>
            <div className="footer-text social">
              <p>CONNECT</p>
              <img src={"./payment-img/social_icon.png"} alt="" />
            </div>
            <div className="footer-text pay"></div>
          </div>
          <hr />
          <div className="footerboxs">
            <div className="copyright">
              <p>Copyright © 2023, deepakbhagat Limited. All Rights Reserved</p>
            </div>
            <div className="copyright">
              <p>Made for Bharat ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
