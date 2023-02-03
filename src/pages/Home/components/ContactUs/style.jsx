import styled from "@emotion/styled";
import contact from 'images/contact.jpg';
import { theme } from "../../../../design-system/Config";
export const ContactUsWrapper = styled("section")`
    label :ContactUsWrapper;
    height: 600px;
    background-size:cover;
    padding: 4rem 0 2rem 0;
    background-repeat: no-repeat;
    background: url(${contact}) fixed;
`;
export const ContactUsContent = styled("div")`
    label :ContactUsContent;
    display :flex;
    align-items:baseline;
    justify-content:space-between;
`;
export const New = styled("span")`
    label :New;
    font-size:2rem;
    color:${theme.black};
`;
export const Event = styled("span")`
    label :Event;
    font-size:2rem;
    color:${theme.primary};
`;
export const Text = styled("p")`
    label :Text;
    font-size:1rem;
    padding-top: 30px;
    color:${theme.gray};
`;
export const ContactUsButton=styled("button")`
    label : ContactUsButton;
    font-size:1rem;
    cursor: pointer;
    margin-top:1.5rem;
    font-weight:bold;
    padding: 1rem 3rem;
    border-radius: 25px;
    transition: all 0.3s;
    color: ${theme.white};
    transition:  0.5s all;
    border: 1px solid ${theme.white};
    background-color: ${theme.primary};
    :hover {
        color: ${theme.white};
        background-color:${theme.black};
        border: 1px solid ${theme.white};    
    }
   
`;
export const FormContactUs = styled("div")`
    label :FormContactUs;
    width: 70%;
    gap:0.5rem;
    display:flex;
    padding: 2rem;
    text-align: center;
    border-radius: 20px;
    flex-direction:column;
    background-color: ${theme.white};
    box-shadow: 0 3px 6px -4px ${theme.whiteSmoke};
`;
export const Keep = styled("span")`
    label :Keep;
    font-size:2rem;
    color:${theme.black};
`;
export const Touch = styled("span")`
    label :Touch;
    font-size:2rem;
    color:${theme.primary};
`;
export const Content = styled("div")`
    label :Content;
    padding: 2rem;
`;
export const ContactUsInput = styled("input")`
    label :contactUsInput;
    width: 70%;
    padding:0.7rem;
    margin: 2px auto;
    border-radius:5px;
    color:${theme.gray};
    background-color: transparent;
    border:1px solid ${theme.whiteSmoke};
    ::placeholder{
        font-size:1rem
    }
`;
export const Send = styled("button")`
    label :Send;
    width: 50%;
    display: block;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 5px;
    border-radius: 25px;
    transition:  0.5s all;
    color: ${theme.white};
    margin: 7rem auto 3rem;
    border: 1px solid ${theme.white};
    background-color: ${theme.primary};
    :hover {
        color: ${theme.white};
        background-color:${theme.black};
        border: 1px solid ${theme.white};    
    }
`;
