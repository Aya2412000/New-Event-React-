import OurSponsor from "../../../../design-system/components/OurSponsor";
import ourSponsorData from "../../../../design-system/components/OurSponsor/ourSponsorData";
import { Our, OurSponsorsWrapper, P, Sponsors, Title, Wrapper } from "./style";
export default function OurSponsors(){
    return(
        <>
            <Wrapper>
                <div className="container">
                <Title>
                    <Our>Our <Sponsors>Sponsors</Sponsors></Our>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis molestias amet.</P>
                </Title>
                <OurSponsorsWrapper>
                {ourSponsorData.map(item=>{
                    return(
                        <OurSponsor img={item.img} alt={item.alt} key={item.key}/>
                    )
                })}
                </OurSponsorsWrapper>
                </div>
            </Wrapper>
        </>
    )
}