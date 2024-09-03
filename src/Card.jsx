import profilePic from './assets/profile.jpg'

function Card(){
    return(
      <div className='card'>
              {/* <img src='https://via.placeholder.com/150' alt='profile picture'></img> */}
              <img className='card-image' src={profilePic} alt='profile picture'></img>
              <h2 className='card-title'>Yura code</h2>
              <p className='card-text'>I make React Application</p>
      </div>
    )
}

export default Card
