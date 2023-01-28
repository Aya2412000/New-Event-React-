import { Content, Image, P, Span, SubTitle, WhachVedioWrapper } from './style';
export default function WhachVedio() {
  return (
    <div className="container">
      <WhachVedioWrapper>
        <Content>
            <Span>Watch Vedio</Span>
            <SubTitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem itaque consectetur aspernatur quas 
            </SubTitle>
            <P>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit doloribus excepturi omnis soluta error at et ipsa aliquam magni. Dolorem nulla vel ex! Minus excepturi, illo consequatur mollitia quaerat cumque?
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
