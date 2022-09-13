import React from 'react'

const AboutBox = () => {
  return (
    <div className="about_boxes">
        <div className="about_boxes-container">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>
                <div>
                    <h3 className="about_title">198</h3>
                    <span className="abit_subtitle">Project completed</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon icon-cup"></i>
                <div>
                    <h3 className="about_title">564</h3>
                    <span className="abit_subtitle">Cup of coffee</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon icon-people"></i>
                <div>
                    <h3 className="about_title">98</h3>
                    <span className="abit_subtitle">Satisfied clients</span>
                </div>
            </div>
            <div className="about_box">
                <i className="about_icon icon-badge"></i>
                <div>
                    <h3 className="about_title">400</h3>
                    <span className="abit_subtitle">Nominess winner</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutBox