import React from "react";
import getStarted from "@/app/assets/get-started.png"
import Image from "next/image";
import Link from "next/link";

function HowItWorks() {
  return (
    <>
      <div className="full-line" />
      <div id="banner-howit">
        <Link href="/contact-us">
          <Image src={getStarted} alt="Get Started" border={0} />
        </Link>
      </div>
      <h3>How It Works</h3>
      <div className="h2-line" />
      <p className="how-h">1. Create Your Website</p>
      <ul className="hw">
        <li className="b1">
          Design your site in minutes utilizing our admin portal uploading your
          colors, logo and images for your organization. You can create a new
          site or easily integrate with your existing web presence – it's up to
          you!
        </li>
        <li className="b2">Do yourself or we'll happily setup for you.</li>
      </ul>
      <p className="how-h">2. Create Your Event(s)</p>
      <ul className="ce">
        <li className="b3">
          Setup your event registrations and go-live in minutes. You can elect
          to collect multiple levels of registrant data, set open | close dates,
          establish event pricing – fixed, discounted or no-cost amounts and
          much, much more. It's all up you!
        </li>
        <li className="b4">
          Reporting – Trusted Register's online event registration provides
          multiple levels of reporting allowing you to manage your events in a
          seamless manner, reducing the amount of administrative time so you can
          focus on the event itself! Whether it's registrant level detail, event
          level detail or sales tracking, our standard reports will meet your
          needs.
        </li>
      </ul>
      <p className="how-h">3. Collect Your Payments</p>
      <ul className="cp">
        <li className="b5">
          Setup multiple payment options depending on your registration needs.
          Whether you are looking to take credit card payments, check payments
          or no payment at all, we have the solution for you.
        </li>
        <li className="b6">
          If you have an existing merchant account, Trusted Register will work
          with you to integrate with your account to ensure all payment
          processing and deposits are posted to your account in the manner they
          are done today.
        </li>
      </ul>
      <br />
      <br />
      <p>
        So what are you waiting for??
        <br />
        <Link href="/contact-us" className="started-link">
          Contact Trusted Register today
        </Link>{" "}
        and see how we can make your registration needs easier!
      </p>

      <div className="line-height" />

    </>
  );
}

export default HowItWorks;
