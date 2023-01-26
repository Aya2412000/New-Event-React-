import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Description, OverviewWrapper, Title } from './style';

export default function Overview({icon,title,description}) {
  return (
    <OverviewWrapper>
      <div >
        <FontAwesomeIcon size='2xl' color='#b25185' icon={icon}/>
      </div>
      <Title> {title}</Title>
      <Description> {description}</Description>
      
    </OverviewWrapper>
  )
}
