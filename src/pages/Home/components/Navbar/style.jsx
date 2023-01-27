import styled from '@emotion/styled';
import theme from '../../../../design-system/Config';
export const Navbarwrapper=styled("section")`
    label :Navbarwrapper;
    padding: 1.5rem 0;
    color: ${theme.white};
    background-color: ${theme.secondary};
`;
export const Navcontent=styled("div")`
    label :Navcontent;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Navtitle=styled("span")`
    label :Navtitle;
    font-size: 1.7rem;
`;
export const Event=styled("span")`
    label :Event;
    color:${theme.primary};
`;
export const LinkWrapper=styled("div")`
    label :LinkWrapper;
    display: flex;
    gap: 2rem;
    align-items: center;
`;
export const Link=styled("a")`
    label :Link;
    font-size: 1rem;
    color: ${theme.white};
    text-decoration: none;
`;