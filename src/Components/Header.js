import React from 'react'

const Header = () => {
  return (
    <div id="header">
        <div className="breathe-logo">
            <h1>Breathe</h1>
        </div>

        <nav id="header-nav">
            <a href="#home-page" className="black current" alt="home-button">Home</a>
            <a href="#questionnaire" className="black" alt="questionnaire-button">Questionnaire</a>
            <a href="#symptom-identification" className="black" alt="symptom-identification-button">Symptom identification</a>
            <a href="#resources" className="black" alt="resources-button">Resources</a>
            <a href="#contact-us" className="black" alt="contact-us-button">Contact us</a>
        </nav>
    </div>
  )
}

export default Header