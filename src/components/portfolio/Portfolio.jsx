import React, { useState } from 'react'
import Menu from './Menu';
import './Portfolio.css'


const Portfolio = () => {

    const [items, setItems] = useState(Menu);

  return (
    <div className='work'>
        <h2 className="section_title">Recent Works</h2>
        <div className="work_filters">
            <span className="work_item">Everything</span>
            <span className="work_item">Creative</span>
            <span className="work_item">Art</span>
            <span className="work_item">Design</span>
            <span className="work_item">Branding</span>
        </div>
        <div className="work_container">
            {items.map((element, index) => {
                return(
                    <div className="work_card">
                        <div className="work_thumbnail">
                            <img src={element.image} alt="" className="work_img" />
                            <div className="work_mask"></div>
                        </div>
                        <span className="work_category"></span>
                        <h3 className="work_title"></h3>
                        <a href="" className="work_button">
                            <i></i>
                        </a>  
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Portfolio