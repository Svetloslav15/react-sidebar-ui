import React from 'react'

const Toggler = ({ isCollapsed, toggleIsOpen, classes }) => {
  return (
    <span
      onClick={() => toggleIsOpen(!isCollapsed)}
      className={classes}>
      {
        !isCollapsed ?
          <i className='fas fa-times toggler' />
          :
          <i className='fas fa-bars toggler' />
      }
    </span>
  )
}

export default Toggler
