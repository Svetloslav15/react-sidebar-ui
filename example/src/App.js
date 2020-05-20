import React from 'react'

import { Sidebar, Logo, LogoText, InputItem, DropdownItem, Item } from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css'

const App = () => {
  return (
    <Sidebar bgColor='red'>
      <LogoText>Logo Text</LogoText>
      <InputItem/>
      <DropdownItem/>
      <Item/>
    </Sidebar>
  )
};

export default App
