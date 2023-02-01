import styled from '@emotion/styled';
import theme from '../../../../../design-system/Config';
export const Wrapper =styled("div")`
    label:Wrapper;
    display:flex;
    align-items:center;
    justify-content:center;
    height:450px;
`;
export const AccordionWrapper =styled("div")`
    label:AccordionWrapper;
    width:70%;
`;
export const Item =styled("div")`
    label:Item;
    margin-bottom:10px;
    box-shadow:0px 3px 6px -4px ${theme.gray};
`;
export const Title =styled("div")`
    label:Title;
    display:flex;
    justify-content:space-between;
    background-color:${theme.graySmoke};
    cursor :pointer;
    align-items: center;
    padding:0 1rem;
`;
export const H2 =styled("h2")`
    label:H2;
    color: #5e5454;
    font-size: 1.5rem;
    font-weight: 500;
    
`;
export const Content =styled("div")`
    label:Content;
   padding:0 1.5rem;
   overflow:hidden;
   max-height:0;
   transition:0.6s all cubic-bezier(0,1,0,1);
   border-radius:5px;
   &.show{
    height : auto;
    max-height:999px;
    transition:0.6s all cubic-bezier(1,0,1,0);
   }
`;
export const P =styled("p")`
    label:P;
   padding:0.3rem 0.5rem;
   color:${theme.gray};
   
`;