import React from 'react'
import styles from './styles.module.css'
import SidebarComponent from './components/sidebar/Sidebar';

export const ExampleComponent = ({ text }) => {
  return (
    <SidebarComponent></SidebarComponent>
  )
};

export const Sidebar = SidebarComponent;
