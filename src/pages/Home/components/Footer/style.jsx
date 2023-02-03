import styled from "@emotion/styled";
import { theme } from "../../../../design-system/Config";
export const FooterWrapper = styled ('footer')`
    label:FooterWrapper;
    padding:3rem 0;
    text-align:center;
`;
export const Content = styled ('span')`
    label:Content;
    font-size:1rem;
    color:${theme.gray};
`;
export const MadeBy = styled ('span')`
    label:MadeBy;
    font-size:1.2rem;
    font-weight:bold;
    color:${theme.primary};
`;
export const Ul = styled ('ul')`
    label:Ul;
    list-style:none;
    display:flex;
    margin-top:2rem;
    justify-content:center;
    gap:1rem;
`;
export const Li = styled ('li')`
    label:Li;
    width:20px;
    height:20px;
    padding:0.8rem;
    cursor:pointer;
    border-radius:50%;
    color:${theme.gray};
    transition:0.5s all;
    :hover{
        color:${theme.white};
        background-color:${theme.primary};
    }
`;