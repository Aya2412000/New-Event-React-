import styled from '@emotion/styled';
import { theme } from '../../Config';

export const OverviewWrapper = styled("div")`
    label:OverviewWrapper;
    width: 300px;
    text-align: center;
`;
export const Title = styled("h1")`
    label:Title;
    color: ${theme.white};
`;
export const Description = styled("p")`
    label:Description;
    color:${theme.gray};
    line-height: 1.9rem;
`;