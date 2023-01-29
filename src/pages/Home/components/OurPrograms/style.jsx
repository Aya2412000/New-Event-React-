import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";

export const OurProgramsWapper = styled("div")`
    label:OurProgramsWapper;
    padding: 5rem 0 3rem;
    width: 940px;
    
`;
export const Our = styled("span")`
    label:Our;
    color: ${theme.black};
    font-size: 1.5rem;
    font-weight: bold;
    
`;
export const Programs = styled("span")`
    label :Programs;
    color: ${theme.primary};
    font-size: 1.5rem;
    font-weight:bold;
`;
export const Description = styled("p")`
    label :Description;
    color: ${theme.gray};
`;
export const TabsWrapper = styled("div")`
    label :TabsWrapper;
    padding-top: 1rem;
`;
export const Wapper = styled("div")`
    label :Wapper;
    display: flex;
    gap: 2rem;
`;
export const Span = styled("span")`
    label :Span;
    font-weight: bold;
    padding: 2rem 0;
    color: ${theme.black};
    cursor: pointer;
`;
export const Line = styled("div")`
    label :Line;
    width: 100%;
    height: 1px;
    margin: 0 0 2rem;
    background-color: ${theme.black};
`;