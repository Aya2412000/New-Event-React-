import { Content, Image, P, Span, SubTitle, WhachVedioWrapper } from './style';
export default function WhachVedio() {
  return (
    <div className="container">
      <WhachVedioWrapper>
        <Content>
            <Span>Watch Vedio</Span>
            <SubTitle>Note that the development build is not optimized.
                To create a production build, use yarn build.
            </SubTitle>
            <P>
            Note that the development build is not optimized.
                To create a production build, use yarn build.Note that the development build is not optimized.
                To create a production build, use yarn build.
            </P>
        </Content>
        <Image>
            <iframe 
            width={"100%"}
            height={"350px"}
            src="https://www.youtube.com/embed/XDPwXQjAlB0" frameborder="0"></iframe>
        </Image>
      </WhachVedioWrapper>
    </div>
  )
}
