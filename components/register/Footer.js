import React from 'react'
import Image from "next/image";
import learnMore from "@/app/assets/learn-more-btn.png";
import learnSmall from "@/app/assets/learn-more-btn2.png";
import paypal from "@/app/assets/icon-paypal.png";
import visa from "@/app/assets/icon-visa.png";
import mastercard from "@/app/assets/icon-mastercard.png";
import americanxpress from "@/app/assets/icon-americanxpress.png";
import discover from "@/app/assets/discover.png";
import Link from 'next/link';

function Footer() {
  return (
    <div id="" className="flex w-full justify-between items-center bg-[#232323] py-2 px-4 rounded-b-[10px]  ">
  <div className="copy-rig text-white">
    © Copyright 2023 Trusted Register LLC. <br />
    All rights reserved.
  </div>
 
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

          <div className="reg !text-white">
    <Link href="#" className="!text-white">Terms Of Use</Link> |{" "}
    <Link href="#" className="!text-white">Privacy Statement</Link>
  </div>
</div>

  )
}

export default Footer
