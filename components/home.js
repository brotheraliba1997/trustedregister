import Image from "next/image";
import React from "react";
import learnMore from "@/app/assets/learn-more-btn.png";
import learnSmall from "@/app/assets/learn-more-btn2.png";
import paypal from "@/app/assets/icon-paypal.png";
import visa from "@/app/assets/icon-visa.png";
import mastercard from "@/app/assets/icon-mastercard.png";
import americanxpress from "@/app/assets/icon-americanxpress.png";
import discover from "@/app/assets/discover.png";

import Slider from "./slider";
import Link from "next/link";

function Home() {
  return (
    <>
      <div id="banner">
        <div className="b-left-side">
          <h2 className="img-remove">Managing your events was never easier!</h2>
          <div className="h-line" />
          <h2>No setup or monthly costs!</h2>
          <div className="h-line" />
          <h2>Pay as you go</h2>
          <div className="h-line" />
          <h2>Easy to use - Get started today!</h2>
          <div className="h-line" />
        </div>
        <div className="b-right-bside">
          <Slider />
        </div>
        <div className="clear" />
        <div className="bottom">
          <Link href="/how-it-works">
            <Image src={learnMore} alt="Learn More" />
          </Link>
        </div>
      </div>

      <div id="wraper-litegrey">
        <div id="brand-web">
          <h1>Branded Website</h1>
          <div className="h-line" />
          <ul>
            <li>Online presence for your organization</li>
            <li>Your logo, your message</li>
            <li>Publish updates in real-time</li>
          </ul>
          <Link href="/how-it-works">
            <Image src={learnSmall} alt="Learn More" className="hck" />
          </Link>
        </div>
        <div id="payment-pack">
          <h1>Payment Processing</h1>
          <div className="h-line" />
          <ul>
            <li>Various payment options </li>
            <li>Accept major credit cards</li>
          </ul>
          <div className="card-icon">
            <Image src={paypal} title="Paypal" alt="Paypal" />
            <Image src={discover} title="Discover Card" alt="Discover Card" />
            <Image src={visa} title="Visa" alt="Visa" />
            <Image src={mastercard} title="Master Card" alt="Master Card" />
            <Image
              src={americanxpress}
              title="American Express"
              alt="American Express"
            />
          </div>
          <Link href="/how-it-works">
            <Image src={learnSmall} alt="Learn More" />
          </Link>
        </div>
      </div>

      <div id="reg-managment">
        <h1>Registration Management</h1>
        <div className="h-line" />
        <ul>
          <li>Easy to use, self-administration</li>
          <li>Full suite of reporting</li>
          <li>Email capabilities</li>
        </ul>
        <Link href="/how-it-works">
          <Image
            src={learnSmall}
            alt="Learn More"
            className="hck"
            objectFit="contain"
          />
        </Link>
      </div>

      <div className="clear"></div>
    </>
  );
}

export default Home;
