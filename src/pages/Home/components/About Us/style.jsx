import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";

export const AboutWrapper = styled("section")`
    display: flex;
    gap: 2rem;
    padding: 3rem 0;
    align-items: flex-start;

`;
export const Span = styled("span")`
    label :Span;
    font-size: 1.5rem;
    color: ${theme.secondary};
    line-height: 1.9rem;

`;
export const P = styled("p")`
    label :P;
    font-size: 1rem;
    color: ${theme.gray};
    line-height: 2rem;
    padding-top: 1.5rem;

`;
export const Content = styled("div")`
    label :Content;
    width: 50%;
`;
export const Image = styled("div")`
    label :Image;
    width: 50%;
`;