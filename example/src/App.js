import React from 'react'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import './index.css';

let typeClass = 'black';

const App = () => {
  return (
    <div>
      <Sidebar bgColor={typeClass} isCollapsed={false}>
        <Logo
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/>
        <LogoText>React Sidebar UI</LogoText>
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={typeClass}>
          Menu
        </DropdownItem>

        <Item bgColor={typeClass}>
          <Icon className="fas fa-home"/>
          Home
        </Item>
        <Item bgColor={typeClass}>
          <Icon className="fas fa-info"/>
          About
        </Item>
        <Item bgColor={typeClass}>
          <Icon className="fas fa-sitemap"/>
          My Website
        </Item>
        <Item bgColor={typeClass}>
          <Icon className="far fa-address-book"/>
          Contacts
        </Item>
        <Item bgColor={typeClass}>
          <Icon className="fas fa-rss-square"/>
          Blog
        </Item>
        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar>
    </div>
  )
};

export default App;
