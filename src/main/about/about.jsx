import './about.css'
import text from '../../texts/eng.json'
import photo from '../../assets/my-photo.jpg'
import Skills from '../skills/skills'
import Employment from '../employment/employment'
import Education from '../edu/edu'


function MainPage() {
  return (
    <><div className='separator'></div>
      <div className="main-info" id='About'>
        <div className="about-me">
          <div className="photo">
            <img src={photo} alt="Maks-photo" className="my-photo" />
          </div>
          <div className="about-me-text-block">
            <h1 className="about-me-h1">{text['about-me']}</h1>
            <p className='about-me-p'>{text['about-me-p']}</p>
          </div>
        </div>
      </div>
      <div className='separator'></div>
      <Skills text={text}></Skills>
      <div className='separator'></div>
      <Employment text={text}></Employment>
      <Education text={text}></Education>
    </>
  )
  
}

export default MainPage