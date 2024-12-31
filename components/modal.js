import React from 'react'

function Modal() {
  return (
    <div id="basic-modal-content">
    <div className="request-info" id="bookf">
      <h3>Contact Us</h3>
      <div className="h2-line" />
      <p>
        To receive more information regarding the Trusted Register online
        registration solution, submit your details below and we will be in contact
        shortly!
      </p>
      <form
        method="post"
        action="?submitcontactus"
        id="contact-form"
        className="contact-form"
      >
        <input
          type="text"
          className="txt"
          defaultValue="Name"
          onfocus="if(this.value=='Name'){this.value='', this.className='txt2'};"
          onblur="if(this.value==''){this.value='Name', this.className='txt'};"
          name="fname"
          id="fname"
        />
        <input
          type="text"
          className="txt"
          defaultValue="Email address"
          onfocus="if(this.value=='Email address'){this.value=''};"
          onblur="if(this.value==''){this.value='Email address'};"
          name="email"
          id="email"
        />
        <input
          type="text"
          className="txt"
          defaultValue="Phone Number"
          onfocus="if(this.value=='Phone Number'){this.value=''};"
          onblur="if(this.value==''){this.value='Phone Number'};"
          name="phone_num"
          id="phone_num"
        />
        <textarea
          rows={5}
          cols={30}
          name="comments"
          id="comments"
          onfocus="if(this.value=='Comments'){this.value=''};"
          onblur="if(this.value==''){this.value='Comments'};"
          defaultValue={"Comments"}
        />
        <input type="submit" className="button" />
      </form>
      <div className="clear" />
    </div>
  </div>
  
  )
}

export default Modal
