import React from 'react';
import { Job, Name, SpeakerWrapper } from './style';
export default function CreativeSpeakerComponent({img,name,job,alt}) {
  return (
    <SpeakerWrapper>
        <img src={img} alt={alt} width="100%"/>
        <Name>{name}</Name>
        <Job>{job}</Job>
    </SpeakerWrapper> 
  )
}
