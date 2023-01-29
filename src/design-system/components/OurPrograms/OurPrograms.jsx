import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Description, IconWrapper, Image, Imagewapper, Name, OurProgramsWapper, Title } from './style';
export default function OurPrograms({img ,time ,roomNumber,title,description,alt,name}) {
  return (
    <OurProgramsWapper>
     <Imagewapper>
        <Image src={img} alt={alt}/>
     </Imagewapper>
     <div>
     <IconWrapper>
        <div>
        <FontAwesomeIcon  size='xs' icon={faClock} />
        <span>{time}</span>
        </div>
        <div>
        <FontAwesomeIcon style={{paddingRight: "0.4rem"}} size='xs' icon={faMapMarker} />
        <span>Room {roomNumber}</span>
        
        </div>
     </IconWrapper>
     <Title>{title}</Title>
     <Name>{name}</Name>
     <Description>{description}</Description>
     </div>
    </OurProgramsWapper>

  )
}
