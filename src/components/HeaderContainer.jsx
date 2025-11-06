import React from 'react'
import "./HeaderContainer.css"
const HeaderContainer = ({span1,span2,para}) => {
  return (
    <div className='header-container'>
        <div className='header-contents'>
            <h1 className='header-content-title'>
                <span >{span1}</span> <span className='red-text'>{span2}</span>
               
            </h1>
            <p className='header-content-subtitle'>{para}</p>
        </div>

    </div>
  )
}

export default HeaderContainer