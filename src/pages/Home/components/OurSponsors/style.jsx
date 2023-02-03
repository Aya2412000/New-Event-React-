import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";
export const Wrapper=styled("section")`
    label:Wrapper;
    padding: 4rem 0 ;
    text-align: center;
`;
export const Title=styled("div")`
    label:Title;
`;
export const Our=styled("span")`
    label:Our;
    color:${theme.black};
    font-size:2rem;
    font-weight:bold;
`;
export const Sponsors=styled("span")`
    label:Sponsors;
    color:${theme.primary};
    font-size:2rem;
    font-weight:bold;
`;
export const P=styled("p")`
    label:P;
    color:${theme.gray};
`;
export const OurSponsorsWrapper=styled("div")`
    label:OurSponsorsWrapper;
    display:flex;
    margin-top: 4rem;
    gap: 1rem;
`;