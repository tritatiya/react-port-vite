import React from 'react'
import './Home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'

const Home = () => {
  return (
    <div className='home' id='home'>
        <div className="intro">
            <img src={Me} alt="me-img" className='home_img'/>
            <h1 className="home_name">YoungTriNeverBroke</h1>
            <span className="home_education">I'm FrontEnd-Developer</span>
            <HeaderSocials/>
            <a href="" className="btn">
                Hire me
            </a>
        </div>
    </div>
  )
}

export default Home