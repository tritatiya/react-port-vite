import React from 'react'
import './About.css'
import AboutBox from './AboutBox'
import avatar from '../../assets/avatar-2.svg'

const About = () => {
  return (
    <section className="container section" id='about'>
        <h2 className="section_title">About Me</h2>
        <div className="about_container">
            <img src={avatar} alt="avatar-img" />
            <div className="about_data">
                <div className="about_info">
                    <p className="about_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sed consequatur, hic, dolorem animi quo necessitatibus quas, 
                        eos aspernatur error quis esse unde maiores. Laboriosam amet velit ducimus praesentium, 
                        fuga dolorem.
                    </p>
                    <div className="btn">
                        Download Resume
                    </div>
                </div>
                <div className="about_skills">
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skill_name">Development</h3>
                            <span className="skill_number">90%</span>
                        </div>
                        <div className="skill_bar">
                            <div className="skill_percentage development"></div>
                        </div>
                    </div>
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skill_name">UX/UI</h3>
                            <span className="skill_number">80%</span>
                        </div>
                        <div className="skill_bar">
                            <div className="skill_percentage ui_design"></div>
                        </div>
                    </div>
                    <div className="skill_data">
                        <div className="skill_titles">
                            <h3 className="skill_name">Photography</h3>
                            <span className="skill_number">60%</span>
                        </div>
                        <div className="skill_bar">
                            <div className="skill_percentage photography"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AboutBox/>
    </section>
  )
}

export default About