import styled from "@emotion/styled";
import header from 'images/intro-bg.jpg';
import { theme } from "../../../../design-system/Config";
export const HeaderWapper=styled("div")`
    label : HeaderWapper;
    height: 700px;
    background: url(${header}) fixed;
    background-size:cover;
    background-repeat: no-repeat;
    padding: 20% 0;
    text-align: center;
`;
export const H3=styled("h3")`
    label : h3;
    font-size: 2rem;
    color: ${theme.white};
`;
export const Title=styled("h1")`
    label : Title;
    font-size: 4rem;
    color: ${theme.white};
   
`;
export const LearnMore=styled("button")`
    label : LearnMore;
    font-size: 1.4rem;
    color: ${theme.white};
    background-color: transparent;
    border: 1px solid ${theme.white};
    padding: 1rem 3rem;
    margin-right: 2rem;
    border-radius: 5px;
    transition: all 0.3s ;
    cursor: pointer; 
    :hover {
    background-color: ${theme.primary};
    }
   
`;
export const Register=styled("button")`
    label : Register;
    font-size: 1.4rem;
    color: ${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.white};
    padding: 1rem 3rem;
    margin-right: 2rem;
    border-radius: 5px;
    transition: all 0.3s ;
    cursor: pointer;
    :hover {
    border: 1px solid ${theme.black};    
    background-color:${theme.white};
    color: ${theme.black};
    }
   
`;