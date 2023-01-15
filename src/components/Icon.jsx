import React from 'react'

const Icon = ({ children, styles, className }) => {
  return (
    <div
      className={`icon ${className}`}
      style={{ styles }}>
        {children}
    </div>
  )
}

export default Icon
