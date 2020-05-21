import React from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';

const App = () => {
  return (
    <div>
      <Sidebar bgColor='blue' isCollapsed={false}>
        <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/>
        <LogoText>React Sidebar UI</LogoText>
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'blue'}>
          Menu
        </DropdownItem>

        <Item bgColor='blue'>
          <Icon><i className="fas fa-home"/></Icon>
          Home
        </Item>
        <Item bgColor='blue'>
          <Icon><i className="fas fa-info"/></Icon>
          About
        </Item>
        <Item bgColor='blue'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          My Website
        </Item>
        <Item bgColor='blue'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contacts
        </Item>
        <Item bgColor='blue'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item>
        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar>
    </div>
  )
};

export default App;
