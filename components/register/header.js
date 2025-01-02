import Image from "next/image";
import React from "react";
import header_bg from "@/app/assets/header_bg.gif";
import Link from "next/link";

function Header() {
  return (
    <>
      <div id="header">
        <div className="banner" >
          <Image src={header_bg} alt="header_bg" className="banner" />
        </div>

        <div id="nav">
          <div className="date !text-[#6D000F] " >Thursday, January 02, 2025</div>
          <ul className="menu">
            <li>
              <Link href="/" title="index" className="!text-[#6D000F] ">
                Home
              </Link>
            </li>{" "}
          </ul>
        </div>
        <div className="clear" />
      </div>
    </>
  );
}

export default Header;
