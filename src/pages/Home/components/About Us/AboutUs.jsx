import Aboutus from 'images/aboutUs.jpg';
import { AboutWrapper, Content, Image, P, Span } from "./style";
export default function AboutUs() {
  return (
    <div className="container">
      <AboutWrapper>
        <Content>
            <Span>Note that the development build is not optimized
                To create a production build use yarn build.
            </Span>
            <P>Note that the development build is not optimized.
                To create a production build, use yarn build.Note that the development build is not optimized.
                To create a production build, use yarn build.
            </P>
            <P>
            Note that the development build is not optimized.
                To create a production build, use yarn build.Note that the development build is not optimized.
                To create a production build, use yarn build.
            </P>
        </Content>
        <Image>
            <img src={Aboutus} alt="About Us" width={"100%"}/>
        </Image>
      </AboutWrapper>
    </div>
  )
}
