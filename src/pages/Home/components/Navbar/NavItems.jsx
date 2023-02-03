import React from 'react';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../../design-system/Config';
import Links from './Links';
import NavLinks from './NavLinks';

export default function NavItems() {
    const items = Links();
    const route = useLocation();
  return items.map((link,index)=>{
    return(
        <NavLinks 
        color={route.pathname === link.navLinks ? theme.primary : theme.white}
        navLinks={link.navLinks} 
        navText={link.navText} 
        key={index}/>
    )
})}
 
  

