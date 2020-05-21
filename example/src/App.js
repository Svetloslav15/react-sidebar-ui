import React from 'react'

import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <Sidebar bgColor='red'>
        <Logo
          image='https://www.dolphinproject.com/wp-content/uploads/2019/07/Maya.jpg'
          imageName='dolphin'/>
        <LogoText>Logo Text</LogoText>
        <DropdownItem/>
        <InputItem/>
        <Item>
          <Icon style={{padding: '10em'}}><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item>About</Item>
        <Item>My Website</Item>
        <Item>Contacts</Item>
        <Item>Blog</Item>
      </Sidebar>
    </div>
  )
};

export default App
