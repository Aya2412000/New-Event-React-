import styled from "@emotion/styled";
import image from 'images/venue.jpg';
import theme from "../../../../design-system/Config";
export const VenueWrapper = styled("section")`
    label :VenueWrapper;
    height: 400px;
    background: url(${image}) fixed;
    background-size:cover;
    background-repeat: no-repeat;
    padding: 4rem 0 2rem 0;
`;
export const VenueContent = styled("div")`
    label :VenueContent;
    display :flex;
    justify-content:space-between;
    align-items:flex-start;
`;
export const Venue = styled("span")`
    label :Venue;
    color:${theme.primary};
    font-size:2rem;
    font-weight: 600;
`;
export const Text = styled("p")`
    label :Text;
    color:${theme.gray};
    font-size:1rem;
    margin-top: 50px;
`;
export const Header = styled("div")`
    label :Header;
    display:flex;
    flex-direction:column;
    margin-top: 50px;
`;
export const Span = styled("span")`
    label :Span;
    color:${theme.black};
    display: block;
    line-height: 2rem;
    font-weight: bold;
`;