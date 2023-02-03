import { useState } from "react";
import OurPrograms from "../../../../design-system/components/OurPrograms/OurPrograms";
import { Tab1, Tab2, Tab3 } from "../../../../design-system/components/OurPrograms/OurprogramsDate";
import { theme } from "../../../../design-system/Config";
import { Line, Span, Wapper } from "./style";

export default function Tabs() {

  const [Tab , SetTab]= useState("Tab1");
  const SwitchTab= (Tab)=>{
    SetTab(Tab);
  };
  return (
    <>
      <Wapper>
        <Span 
        style={{
          color : Tab==="Tab1" ? theme.primary:"",
          borderBottom :Tab==="Tab1" ?  `1px solid ${theme.black}`:""
          }} 
          onClick={()=> SwitchTab("Tab1")}>First Day</Span>
        <Span style={{
          color : Tab==="Tab2" ? theme.primary:"",
          borderBottom :Tab==="Tab2" ?  `1px solid ${theme.black}`:""
          }}
          onClick={()=> SwitchTab("Tab2")}>Second Day</Span>
        <Span style={{
          color : Tab==="Tab3" ? theme.primary:"",
          borderBottom :Tab==="Tab3" ?  `1px solid ${theme.black}`:""
          }}
          onClick={()=> SwitchTab("Tab3")}>Third Day</Span>
      </Wapper>
      <Line />
      <div>
        {Tab==="Tab2"?
          Tab2.map(item=>{
            return(
              <OurPrograms
              img={item.img}
              name={item.name}
              title={item.title} 
              time={item.time} 
              description={item.description} 
              roomNumber={item.roomNumber}
              alt={item.alt} 
              key={item.id} 
              />
            );
          }) 
          : Tab === "Tab3" ?
            Tab3.map(item=>{
              return (
                <OurPrograms
                img={item.img} 
                name={item.name}
                title={item.title} 
                time={item.time} 
                description={item.description} 
                roomNumber={item.roomNumber}
                alt={item.alt} 
                key={item.id} 
              />
            );
          })
          : Tab1.map(item=>{
              return (
                <OurPrograms
                img={item.img} 
                name={item.name}
                title={item.title} 
                time={item.time} 
                description={item.description} 
                roomNumber={item.roomNumber}
                alt={item.alt} 
                key={item.id} 
              />
            );
          })
}

      </div>
    </>
);
}
