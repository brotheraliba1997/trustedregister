import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo (1).png"
import request from "@/app/assets/click-to-request-info.png"

function Header() {
  return (
    <>
      <div id="header">
        <div className="logo">
          <a href="#">
            <Image  src={logo}  width={261} height={70}  />
          </a>
        </div>
        <div className="request" id="bookm">
        <Image  src={request}  width={261} height={70}  />

        </div>
        <div className="clear" />
      </div>

      <div id="home-active">
        <div id="menu">
          <div className="time">Tuesday, December 31, 2024</div>
          <ul className="nav">
            <li className="active1">
              <div>
                <a href="?index">Home</a>
              </div>
            </li>
            <li className="active2">
              <div>
                <a href="?aboutus">About Us</a>
              </div>
            </li>
            <li className="active3">
              <div>
                <a href="?howitworks">How It Works</a>
              </div>
            </li>
            {/*<li class="active4"><div><a href="?signup">Get Started</a></div></li>*/}
            <li className="active5">
              <div>
                <a href="?contactus">Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
