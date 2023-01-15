import React from 'react'
import colors from '../enums/colors'
import colorsHovered from '../enums/colors-hovered'

const Item = ({ bgColor, children, onClick, classes }) => {
  const color = `${colorsHovered[bgColor]} ${colors[bgColor]}`

  return (
    <div
      onClick={onClick}
      className={`item ${color} ${classes && classes}`}>
      {children}
    </div>
  )
}

export default Item
