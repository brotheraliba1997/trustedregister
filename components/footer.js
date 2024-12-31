import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div id="footer">
      <ul>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="#">How It Works</Link>
        </li>
        <li>|</li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>

      <p>
        © Copyright Trusted Register 2024.&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="?privacy_statement">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="?terms_of_use">Terms Of Use</a>
      </p>
    </div>
  );
}

export default Footer;
