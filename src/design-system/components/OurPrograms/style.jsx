import styled from '@emotion/styled';
import { theme } from '../../Config';
export const OurProgramsWapper=styled("div")`
    label : OurProgramsWapper;
    display: flex;
    gap:3rem;
    align-items: center;
`;
export const Image=styled("img")`
    label : Image;
    border-radius: 50%;
    width: 100%;
`;
export const Imagewapper=styled("div")`
    label : Imagewapper;
    width: 15%;
    padding: 2rem 0;
`;
export const IconWrapper=styled("div")`
    label : IconWrapper;
    gap: 2rem;
    display: flex;
    color: ${theme.gray};
`;

export const Title=styled("h2")`
    label : Title;
    margin: 0.4rem 0;
    color: ${theme.gray};
`;
export const Name=styled("span")`
    label : Name;
    font-size: 0.9rem;
    padding: 0.5rem 0;
    color:${theme.gray};
    display: block;
`;
export const Description =styled("p")`
    label : Description;
    color: ${theme.gray};
    font-size: 16px;
    display: block;
`;
