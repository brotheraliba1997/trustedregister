import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo (1).png"
import request from "@/app/assets/click-to-request-info.png"
import Link from "next/link";

function Header() {
  return (
    <>
      <div id="header">
        <div className="logo">
          <Link href="#">
            <Image  src={logo}  width={261} height={70}  />
          </Link>
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
                <Link href="/">Home</Link>
              </div>
            </li>
            <li className="active2">
              <div>
                <Link href="/about-us">About Us</Link>
              </div>
            </li>
            <li className="active3">
              <div>
                <Link href="/how-it-works">How It Works</Link>
              </div>
            </li>
            {/*<li class="active4"><div><a href="?signup">Get Started</a></div></li>*/}
            <li className="active5">
              <div>
                <Link href="/contact-us">Contact Us</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
