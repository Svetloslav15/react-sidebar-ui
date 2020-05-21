import React from 'react'

import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <Sidebar bgColor='black'>
        <Logo
          image='https://www.dolphinproject.com/wp-content/uploads/2019/07/Maya.jpg'
          imageName='dolphin'/>
        <LogoText>Logo Text</LogoText>
        <DropdownItem values={['First', 'Second', 'Third']} bgColor={'black'}>Menu</DropdownItem>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          About
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          My Website
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-arrow-alt-circle-right"/></Icon>
          Contacts
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
          Blog
        </Item>
      </Sidebar>
    </div>
  )
};

export default App
