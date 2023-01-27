import React from 'react';
import '../../../../design-system/main.css';
import NavItems from './NavItems';
import { Event, LinkWrapper, Navbarwrapper, Navcontent, Navtitle } from './style';
export default function Navbar() {
  return (
    <Navbarwrapper>
      <div className='container'>
        <Navcontent>
            <div>
                <Navtitle>New <Event>Event</Event></Navtitle>
            </div>
            <LinkWrapper >
                <NavItems/>
            </LinkWrapper>
        </Navcontent>
      </div>
    </Navbarwrapper>
  )
}
