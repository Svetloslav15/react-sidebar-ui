import React from 'react'

const Icon = ({ children, styles, classes }) => {
  return (
    <div
      className={'_2Vept ' + classes}
      style={{ styles }}>
        {children}
    </div>
  )
}

export default Icon
