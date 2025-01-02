import React from "react";

function Register() {
  return (
    <>
      <div id="sub-section" className="register">
        <h1 className="text-[#70020e]">Register</h1>
        <div className="h-line" />
        <h3>
          For question concerning your online registration, please email us at{" "}
          <span>support@trustedregister.site</span>.
        </h3>
        <h3>
          All fields marked with an asterisk (<span>*</span>) are required.
        </h3>
        <h2 className="!text-[#6D000F]">Primary Contact Information</h2>
        <form
          name="frmregistration"
          id="frmregistration"
          method="post"
          action="?submitregister"
        >
          <div className="input-div">
            <label>
              First Name:<span>*</span>
            </label>
            <input
              type="text"
              name="pfirst_name"
              id="pfirst_name"
              tabIndex={1}
              className="f-input"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>
              Last Name:<span>*</span>
            </label>
            <input
              type="text"
              tabIndex={2}
              className="f-input"
              name="plast_name"
              id="plast_name"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>Suffix:</label>
            <input
              type="text"
              maxLength={2}
              tabIndex={3}
              className="f-input"
              name="psuffix"
              id="psuffix"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>
              Street Address:<span>*</span>
            </label>
            <input
              type="text"
              tabIndex={4}
              className="f-input"
              name="pstreet"
              id="pstreet"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>Apt. | Suite #:</label>
            <input
              type="text"
              tabIndex={5}
              className="f-input"
              name="psuitno"
              id="psuitno"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>
              City:<span>*</span>
            </label>
            <input
              type="text"
              tabIndex={6}
              className="f-input"
              name="pcity"
              id="pcity"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>
              State:<span>*</span>
            </label>
            <select
              name="pstate"
              id="pstate"
              className="f-input select"
              tabIndex={7}
            >
              <option value="">Select State</option>
              <option value={1}>Alabama</option>
              <option value={2}>Alaska</option>
              <option value={3}>Arizona</option>
              <option value={4}>Arkansas</option>
              <option value={5}>California</option>
              <option value={6}>Colorado</option>
              <option value={7}>Connecticut</option>
              <option value={8}>Delaware</option>
              <option value={9}>District of Columbia</option>
              <option value={10}>Florida</option>
              <option value={11}>Georgia</option>
              <option value={12}>Hawaii</option>
              <option value={13}>Idaho</option>
              <option value={14}>Illinois</option>
              <option value={15}>Indiana</option>
              <option value={16}>Iowa</option>
              <option value={17}>Kansas</option>
              <option value={18}>Kentucky</option>
              <option value={19}>Louisiana</option>
              <option value={20}>Maine</option>
              <option value={21}>Maryland</option>
              <option value={22}>Massachusetts</option>
              <option value={23}>Michigan</option>
              <option value={24}>Minnesota</option>
              <option value={25}>Mississippi</option>
              <option value={26}>Missouri</option>
              <option value={27}>Montana</option>
              <option value={28}>Nebraska</option>
              <option value={29}>Nevada</option>
              <option value={30}>New Hampshire</option>
              <option value={31}>New Jersey</option>
              <option value={32}>New Mexico</option>
              <option value={33}>New York</option>
              <option value={34}>North Carolina</option>
              <option value={35}>North Dakota</option>
              <option value={36}>Ohio</option>
              <option value={37}>Oklahoma</option>
              <option value={38}>Oregon</option>
              <option value={39}>Pennsylvania</option>
              <option value={55}>Puerto Rico</option>
              <option value={40}>Rhode Island</option>
              <option value={41}>South Carolina</option>
              <option value={42}>South Dakota</option>
              <option value={43}>Tennessee</option>
              <option value={44}>Texas</option>
              <option value={54}>US Virgin Island</option>
              <option value={45}>Utah</option>
              <option value={46}>Vermont</option>
              <option value={47}>Virginia</option>
              <option value={48}>Washington</option>
              <option value={49}>West Virginia</option>
              <option value={50}>Wisconsin</option>{" "}
            </select>
          </div>
          <div className="input-div">
            <label>
              Zip Code:<span>*</span>
            </label>
            <input
              type="text"
              name="pzipcode"
              maxLength={5}
              id="pzipcode"
              defaultValue=""
              tabIndex={8}
              className="f-input"
            />
          </div>
          <div className="input-div">
            <label>
              Tele Phone:<span>*</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              maxLength={14}
              tabIndex={9}
              className="f-input required phone valid"
            />
            <label
              style={{ display: "none" }}
              className="error"
              generated="true"
              htmlFor="phone"
            />
          </div>
          <div className="input-div">
            <label>Cell Phone:</label>
            <input
              type="text"
              name="cphone"
              id="cphone"
              maxLength={14}
              tabIndex={10}
              className="f-input phone valid"
            />
            <label
              style={{ display: "none" }}
              className="error"
              generated="true"
              htmlFor="cphone"
            />
          </div>
          <div className="input-div">
            <label>Other Phone:</label>
            <input
              type="text"
              name="ophone"
              id="ophone"
              maxLength={14}
              tabIndex={11}
              className="f-input phone valid"
            />
            <label
              style={{ display: "none" }}
              className="error"
              generated="true"
              htmlFor="ophone"
            />
          </div>
          <div className="input-div">
            <label>
              Email:<span>*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue=""
              tabIndex={12}
              className="f-input"
            />
            <span id="msgbox" style={{ display: "none", marginTop: 3 }} />
          </div>
          <div className="input-div">
            <label>Alternate Email:</label>
            <input
              type="text"
              tabIndex={13}
              className="f-input"
              name="alternate_email"
              id="alternate_email"
              defaultValue=""
            />
            <span id="msgbox" style={{ display: "none", marginTop: 3 }} />
          </div>
          <div className="input-div">
            <label>
              Create a Password:<span>*</span>
            </label>
            <input
              type="password"
              tabIndex={14}
              className="f-input"
              id="password"
              name="password"
              defaultValue=""
            />
          </div>
          <div className="input-div">
            <label>
              Confirm Password:<span>*</span>
            </label>
            <input
              type="password"
              tabIndex={15}
              className="f-input"
              name="conpassword"
              id="conpassword"
              defaultValue=""
            />
          </div>
          <h3>
            <label>
              <input type="checkbox" />
              By clicking “Submit” I am agreeing to receive calls and text
              messages. I provide my signature expressly consenting to recurring
              contact from Trusted Register at the number I provided regarding
              products or services via live, automated or prerecorded telephone
              call, text message, or email. I understand that my telephone
              company may impose charges on me for these contacts, and I am not
              required to enter into this agreement as a condition of purchasing
              property, goods, or services. I can revoke this consent by
              replying STOP to the text msg received or by contacting via email
              info@trustedregister.site. Terms &amp; Conditions/privacy policy
              apply. For SMS campaigns: Text STOP to cancel and HELP for help.
              Msg &amp; data rates may apply.
            </label>
          </h3>
          <div className="buttons-wrp">
            <div className="btn-div">
              <input type="Submit" defaultValue="Submit" className="form-btn" />
            </div>
          </div>
        </form>
      </div>

      <div class="clear"></div>
    </>
  );
}

export default Register;
