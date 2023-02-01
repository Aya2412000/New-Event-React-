import Accordion from './Accordion/Accordion';
import { AccordionComponentWrapper, Description, FirstWord, SecondWord } from './style';
export default function AccordionComponent() {
  return (
    <>
        <div className="container">
        <AccordionComponentWrapper>
            <FirstWord>Do You Have <SecondWord>Question ?</SecondWord>
            </FirstWord>
            <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Description>
        </AccordionComponentWrapper>
        <Accordion/>
        </div>
      
    </>
  )
}
