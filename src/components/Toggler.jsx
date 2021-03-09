import React from 'react'

const Toggler = ({ isCollapsed, toggleIsOpen, classes }) => {
  return (
    <span
      onClick={() => toggleIsOpen(!isCollapsed)}
      className={classes}>
      {
        !isCollapsed ?
          <i className='fas fa-times _2_oI1' />
          :
          <i className='fas fa-bars _2_oI1' />
      }
    </span>
  )
}

export default Toggler
