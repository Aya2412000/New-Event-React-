import Aboutus from 'images/aboutUs.jpg';
import { AboutWrapper, Content, Image, P, Span } from "./style";
export default function AboutUs() {
  return (
    <div className="container">
      <AboutWrapper>
        <Content>
            <Span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis molestias amet.
            </Span>
            <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ullam quaerat suscipit tenetur architecto, facere, nobis dolorum illo distinctio excepturi, assumenda dolore. Eos soluta placeat doloribus vitae, officiis nulla!
            </P>
            <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae, nesciunt, odio aliquam sed at id atque recusandae exercitationem voluptatibus saepe nulla modi deserunt officiis? Ad officiis vero corrupti corporis?
            </P>
        </Content>
        <Image>
            <img src={Aboutus} alt="About Us" width={"100%"}/>
        </Image>
      </AboutWrapper>
    </div>
  )
}
