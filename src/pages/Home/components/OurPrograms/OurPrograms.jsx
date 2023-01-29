import { Description, Our, OurProgramsWapper, Programs, TabsWrapper } from './style';
import Tabs from './Tabs';
export default function OurPrograms() {
  return (
    <>
      <div className="container">
          <OurProgramsWapper>
            <Our>Our <Programs>Programs</Programs></Our>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero iusto beatae odio labore voluptatum fuga quas, tempore aliquam 
            </Description>
            <TabsWrapper>
              <Tabs/>
            </TabsWrapper>
          </OurProgramsWapper>
      </div>
    </>
  )
}
