import Slider from "./Slider";
import { Creative, CreativeSpeakerWrapper, Description, SliderWrapper, Speakers } from "./style";

export default function CreativeSpeaker() {
  return (
    <>
      <CreativeSpeakerWrapper>
        <div className="container">
            <div>
            <Creative>Creative <Speakers>Speakers</Speakers></Creative>
            <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni unde eaque </Description>
            </div>
            <SliderWrapper>
                <Slider/>
            </SliderWrapper>
        </div>
      </CreativeSpeakerWrapper>
    </>
  )
}
