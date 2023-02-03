import styled from '@emotion/styled';
import { theme } from '../../../../design-system/Config';
export const AccordionComponentWrapper = styled("section")`
    label:AccordionComponentWrapper;
    text-align:center;
    padding:4rem 0 2rem 0;
`;
export const FirstWord = styled("span")`
    label:FirstWord;
    color:${theme.black};
    font-size:2rem;
    font-weight:bold;

`;
export const SecondWord = styled("span")`
    label:SecondWord;
    color:${theme.primary};
    font-size:2rem;
    font-weight:bold;
`;
export const Description = styled("div")`
    label:Description;
    color:${theme.gray};
    padding-top:0.5rem;
`;