import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconWrapper, Image, Imagewapper, OurProgramsWapper } from './style';
export default function OurPrograms({img ,time ,roomNumber,title,description,alt}) {
  return (
    <OurProgramsWapper>
     <Imagewapper>
        <Image src={img} alt={alt}/>
     </Imagewapper>
     <div>
     <IconWrapper>
        <div>
        <FontAwesomeIcon size='xs' icon={faClock} />{time}
        </div>
        <div>
        <FontAwesomeIcon size='xs' icon={faMapMarker} />
        <span>Room</span>
        {roomNumber}
        </div>
     </IconWrapper>
     <h2>{title}</h2>
     <span>this is span</span>
     <p>{description}</p>
     </div>
    </OurProgramsWapper>
  )
}
