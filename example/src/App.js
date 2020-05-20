import React from 'react'

import * as SidebarUI from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <SidebarUI.Sidebar bgColor='red'>
        <SidebarUI.Logo
          image='https://www.dolphinproject.com/wp-content/uploads/2019/07/Maya.jpg'
          imageName='dolphin'/>
        <SidebarUI.LogoText>Logo Text</SidebarUI.LogoText>
        <SidebarUI.DropdownItem/>
        <SidebarUI.InputItem/>
        <SidebarUI.Icon/>
        <SidebarUI.Item/>
      </SidebarUI.Sidebar>
    </div>
  )
};

export default App
