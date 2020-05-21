import React from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import {Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Sidebar bgColor='black' isCollapsed={false}>
        <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/>
        <LogoText>React Sidebar UI</LogoText>

        <DropdownItem values={['First', 'Second', 'Third']} bgColor={'black'}>Menu</DropdownItem>
        <Link to='/home'>
          <Item bgColor='black'>
            <Icon><i className="fas fa-home"/></Icon>
            Home
          </Item>
        </Link>
        <Link to='/about'>
          <Item bgColor='black'>
            <Icon><i className="fas fa-info"/></Icon>
            About
          </Item>
        </Link>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          My Website
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
          Contacts
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
          Blog
        </Item>
      </Sidebar>
    </div>
  )
};

export default App
