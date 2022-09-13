import React from 'react'
import Card from './Card'
import Data from './Data'
import './Resume.css'

const Resume = () => {
  return (
    <section className="container section" id="resume">
        <h2 className="section_title">Experience</h2>
        <div className="resume_container">
            <div className="timeline">
                {Data.map((value, index)=> {
                    if(value.category === 'education') {
                        return (
                            <Card 
                                key={index}
                                icon={value.icon}
                                title={value.title}
                                year={value.year}
                                desc={value.desc}
                            />
                        )
                    }
                })}
            </div>
            <div className="timeline">
                {Data.map((value, index)=> {
                    if(value.category === 'experience') {
                        return (
                            <Card 
                                key={index}
                                icon={value.icon}
                                title={value.title}
                                year={value.year}
                                desc={value.desc}
                            />
                        )
                    }
                })}
            </div>
        </div>
    </section>
  )
}

export default Resume