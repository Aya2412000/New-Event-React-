import React from 'react';
import { SpeakerWrapper } from './style';
export default function CreativeSpeaker({img,name,job,alt}) {
  return (
    <SpeakerWrapper>
        <img src={img} alt={alt} width="100%"/>
        <h1>{name}</h1>
        <p>{job}</p>
    </SpeakerWrapper> 
  )
}
