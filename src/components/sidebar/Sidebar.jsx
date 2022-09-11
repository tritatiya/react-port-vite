import React from 'react'
import './Sidebar.css' 
import Logo from '../../assets/logo.svg'


const Sidebar = () => {
  return (
    <div className='aside'>
        <a href="" className="nav_logo">
            <img src={Logo} alt="logo-img" />
        </a>
        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav_list">
                <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="nav_link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
                </ul>
            </div>
        </nav>
        <div className="nav_footer">
            <span className="copylight">
                &copy; 2022 - 2023
            </span>
        </div>
    </div>
  )
}

export default Sidebar