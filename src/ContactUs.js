import React from 'react'

const ContactUs = () => {
  return (
    <div id="contact-us">
        <div id="contact-box">
            <button type="button" className="contact-us-button">
                Contact Us
            </button>
            <br></br>
            <button type="button" className="call-now-button">
                Call Now
            </button>
            <br></br>
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" height={30} width={30} alt="gmail-icon"></img>
            <input type="text"></input>
            <br></br>
            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" height={30} width={30} alt="phone-icon"></img>
            <input type="text"></input>
        </div>
    </div>
  )
}

export default ContactUs