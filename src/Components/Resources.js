import React from 'react'

const Resources = () => {
  return (
    <div id="resources" className="page">
        <div id="resources-card">
            <div id="resource-card-header">
                <h3>RESOURCES</h3>
            </div>
            <div id="resource-options">
              <div className='grid-container'>
                <div className='videos'>
                  <div className='grid'> 
                    <img className='youtube' src='https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png' height={80} width={80}></img>
                    <h3>Videos</h3> 
                  </div>
                  <a target="_blank" href="https://www.youtube.com/watch?v=tEmt1Znux58"><button className="resource-buttons" id="soft-btn">Breathing Relaxation</button></a>
                  <a target="_blank" href="https://www.youtube.com/watch?v=7AkbUfZjS5k"><button className="resource-buttons" id="nature">Virtual Nature</button></a>
                </div>
                <div className='podcasts'>
                  <div className='grid'> 
                  <img className='spotify img-re' src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png' height={40} width={40}></img>
                    <h3>Podcasts</h3>
                  </div>
                    <a target="_blank" href="https://open.spotify.com/show/3bDIT3GVMOB7hTJJfdH0kO"><button className="resource-buttons" id="">Dear Therapists</button></a>
                    <a target="_blank" href="https://open.spotify.com/show/4YXBHlLzuoESo0FKF5ufLy"><button className="resource-buttons" id="">GriefCast</button></a>
                </div>
                <div className='activities'>
                  <div className='grid'> 
                  <img className='img-re' src='https://cdn-icons-png.flaticon.com/512/98/98755.png?w=360' height={40} width={40}></img>
                    <h3>Activities</h3>
                  </div>
                  <a target="_blank" href="http://weavesilk.com/"><button className="resource-buttons" id="silk-btn">Weave Silk</button></a>
                </div>
                <div className='calming'>
                  <div className='grid'> 
                  <img className='img-re' src='https://cdn-icons-png.flaticon.com/512/157/157785.png' height={40} width={40}></img>
                    <h3>Relaxing</h3>
                  </div>
                  <a target="_blank" href="http://www.pixelthoughts.co/#"><button className="resource-buttons" id="pixel-btn">Pixel Thoughts</button></a>
                </div>
              </div>      
            </div>
        </div>
        <div id="resource-page-image">
            <img id="imgHead2" src="https://cdn.discordapp.com/attachments/934093506773938277/965141584972775434/image7.png" alt="messed-brain" />
        </div>
    </div>
  )
}

export default Resources