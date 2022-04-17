import React from 'react'

const ContactUs = () => {
  return (
    <div id="contact-us" className='page'>
        <button type="button" className="contact-us-button">
            CONTACT US
        </button>
        <div id="contact-box">
            <br></br>
            <button type="button" className="call-now-button">
                CALL NOW
            </button>
            <br></br>
            <div className='info-box'>
                <div className='row-box'>
                    <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" height={50} width={50} alt="gmail-icon" className='contact-image'></img>
                    <input type="text" className='contact-input'></input>
                </div>
                <div className='row-box'>
                    <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" height={50} width={50} alt="phone-icon" className='contact-image'></img>
                    <input type="text" className='contact-input'></input>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs