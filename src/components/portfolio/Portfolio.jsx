import React, { useState } from 'react'
import Menu from './Menu';
import './Portfolio.css'


const Portfolio = () => {

    const [items, setItems] = useState(Menu);
    const filterItem = (item) =>{
        const update = Menu.filter((element) => {
            return element.category === item
        })
        setItems(update)
    }

  return (
    <div className='container section' id='portfolio'>
        <h2 className="section_title">Recent Works</h2>
        <div className="work_filters">
            <span className="work_item" onClick={()=>setItems(Menu)}>Everything</span>
            <span className="work_item" onClick={()=> filterItem('Creative')}> Creative</span>
            <span className="work_item" onClick={()=> filterItem('Art')}>Art</span>
            <span className="work_item" onClick={()=> filterItem('Design')}>Design</span>
            <span className="work_item" onClick={()=> filterItem('Branding')}>Branding</span>
        </div>
        <div className="work_container">
            {items.map((element, index) => {
                return(
                    
                    <div  key={element.id} className="work_card">
                        <div className="work_thumbnail">
                            <img src={element.image} alt="work-img" className="work_img" />
                            <div className="work_mask"></div>
                        </div>
                        <span className="work_category">{element.category}</span>
                        <h3 className="work_title">{element.title}</h3>
                        <a href="" className="work_button">
                        <i className="icon-link work_button-icon"></i>
                        </a>  
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Portfolio