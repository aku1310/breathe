import React from 'react'

const HomePage = () => {
  return (
    <div id="home-page" className="page">
        <div id="middle-box">
            <div id="brain-image">
                <img id="imgBrain" src="https://media.discordapp.net/attachments/934093506773938277/965141585216041020/unknown.png" alt="meditating-brain" />
            </div>
            <div className="breathe-logo" id="main-page-logo">
                <h1>Breathe</h1>
            </div>
            <div id="home-buttons">
                <a href='#questionnaire'><button className="main-buttons" id="home-questionnaire">Fill a Questionnaire</button></a>
                <a href='#resources'><button className="main-buttons" id="proceed-to-website">Proceed to Website</button></a>
                
            </div>
        </div>
    </div>
  )
}

export default HomePage