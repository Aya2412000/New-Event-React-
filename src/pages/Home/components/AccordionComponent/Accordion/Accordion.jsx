import { useState } from 'react';
import Data from './Data';
import { AccordionWrapper, Content, H2, Item, P, Title, Wrapper } from './styled';
export default function Accordion() {

    const [active,setActive] = useState(null);
    const toggle = (i)=>{
        if(active=== i){
          return  setActive(null);
        }
        setActive(i);
    }
  return (
            <Wrapper>
                <AccordionWrapper>
                {Data.map((item,i)=>{
                    return(
                        <Item key={item.i} onClick={()=>toggle(i)}>
                    <Title>
                        <H2>{item.question}</H2>
                        <span >{active===i ? "-" :"+"}</span>
                    </Title>
                    <Content className = {active=== i ? "show":""}>
                        <P>{item.answer1}</P>
                        <P>{item.answer2}</P>
                    </Content>
                </Item>
                    )
                })}
                </AccordionWrapper>
            </Wrapper>
  )
}
