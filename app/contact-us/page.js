import React from "react";

function ContactUs() {
  return (
    <>
      <h3>Contact Us</h3>
      <div className="h2-line" />
      <p>
        Ready to get started or would you simply like more information? Please
        contact us!
      </p>

      <table width="100%">
        <tbody>
          <tr>
            <td colSpan={2}>
              <input
                type="text"
                className="w-[300px] my-[10px] p-[10px]"
                defaultValue="Name"
                onfocus="if(this.value=='Name'){this.value='', this.className='txt2'};"
                onblur="if(this.value==''){this.value='Name', this.className='txt'};"
                name="fname"
                id="fname"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input
                type="text"
                className="w-[300px] my-[10px] p-[10px]"
                defaultValue="Email address"
                onfocus="if(this.value=='Email address'){this.value=''};"
                onblur="if(this.value==''){this.value='Email address'};"
                name="email"
                id="email"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input
                type="text"
                className="w-[300px] my-[10px] p-[10px]"
                defaultValue="Phone Number"
                onfocus="if(this.value=='Phone Number'){this.value=''};"
                onblur="if(this.value==''){this.value='Phone Number'};"
                name="phone_num"
                id="phone_num"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <textarea
                rows={5}
                cols={30}
                className="w-[300px] my-[10px] p-[10px]"
                name="comments"
                id="comments"
                onfocus="if(this.value=='Comments'){this.value=''};"
                onblur="if(this.value==''){this.value='Comments'};"
                defaultValue={"Comments"}
              />
            </td>
          </tr>

          <tr>
            <td></td>
            <td />
          </tr>
        </tbody>
      </table>

      <div>
        <div className="flex items-start gap-3">
          <br />
          <input type="checkbox" className="mb-2" />
          <span>
            By clicking “Submit” I am agreeing to receive text messages. I
            provide my signature expressly consenting to recurring contact from
            Trusted Register at the number I provided regarding products or
            services via text message. I understand that my telephone company
            may impose charges on me for these contacts, and I am not required
            to enter into this agreement as a condition of purchasing property,
            goods, or services. I can revoke this consent by replying STOP to
            the text msg received or by contacting via email
            support@trustedregister.net. Terms &amp; Conditions/privacy policy
            apply. For SMS campaigns: Text STOP to cancel and HELP for help. Msg
            &amp; data rates may apply.
          </span>
        </div>

        <div className="mt-2 submit_button">
          <input type="submit" className="button" />
        </div>

        <div className="line-height" />

        <div className="contact-detail">
          <h3>Email us directly:</h3>
          <div className="h2-line" />
          <div className="email">support@trustedregister.net</div>
        </div>

        <div className="line-height" />
      </div>
    </>
  );
}

export default ContactUs;
