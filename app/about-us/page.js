import Link from "next/link";
import React from "react";

function AboutUsPage() {
  return (
    <>
      <div className="full-line" />
      <h3>About Us</h3>
      <div className="h2-line" />
      <p>
        Trusted Register site (owned and operated by Trusted Register LLC, a
        Georgia Corporation) is an online registration program especially
        designed to allow organizations the ability to provide an online-based
        registration process for their registrants. In turn, providing the
        administrators the ability to better manage and facilitate registrations
        by eliminating the paper process, ensuring timely payments and access to
        comprehensive tracking and reporting. All for a very low cost per
        registration and with no contracts or long-term commitments!Our program
        allows the event organizer to have an online registration presence / web
        site, create events, accept registrations and collect payments all in
        one! Trusted Register does not want to change your registration process
        only help make it more efficient for you as the administrator while
        providing the convenience for your registrants.
      </p>
      <p>
        If you are organizing events today and looking to ease the process,
        Trusted Register can help!
      </p>
      <p>
        <Link href="/contact-us" className="started-link">
          Contact us today
        </Link>{" "}
        to learn how easy and quick the online registration process should be.
      </p>
      <div className="line-height" />

    </>
  );
}

export default AboutUsPage;
