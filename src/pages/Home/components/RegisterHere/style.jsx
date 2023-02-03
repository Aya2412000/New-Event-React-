import styled from "@emotion/styled";
import register from 'images/register-bg.jpg';
import { theme } from "../../../../design-system/Config";
export const RegisterHereWrapper = styled("section")`
    label :RegisterHereWrapper;
    height: 400px;
    background: url(${register}) fixed;
    background-size:cover;
    background-repeat: no-repeat;
    padding: 4rem 0 2rem 0;
`;
export const RegisterContent = styled("div")`
    label :RegisterContent;
    display :flex;
    justify-content:space-between;
    align-items:flex-start;
`;
export const Register = styled("span")`
    label :Register;
    color:${theme.white};
    font-size:2rem;
`;
export const Here = styled("span")`
    label :Here;
    color:${theme.primary};
    font-size:2rem;
`;
export const Text = styled("p")`
    label :Text;
    color:${theme.white};
    font-size:1.2rem;
`;
export const TextTow = styled("p")`
    label :TextTow;
    color:${theme.gray};
    
`;
export const FormRegister = styled("div")`
    label :FormRegister;
    display:flex;
    flex-direction:column;
    gap:1rem
    
`;
export const RegisterInput = styled("input")`
    label :RegisterInput;
    padding:0.7rem;
    border-radius:5px;
    border:2px solid ${theme.white};
    color:${theme.white};
    background-color:transparent;
    ::placeholder{
        font-size:1rem
    }
`;
export const RegisterButton=styled("button")`
    label : RegisterButton;
    font-size: 1rem;
    color: ${theme.white};
    background-color: ${theme.primary};
    border: 1px solid ${theme.white};
    padding: 1rem 3rem;
    margin-top:1.5rem;
    border-radius: 25px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
    border: 1px solid ${theme.black};    
    background-color:${theme.white};
    color: ${theme.black};
    }
   
`;