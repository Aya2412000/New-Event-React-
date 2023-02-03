import styled from '@emotion/styled';
import { theme } from '../../Config';

export const SpeakerWrapper= styled("div")`
  label:SpeakerWrapper;
  width  :285px ;
  text-align: center;
`;
export const Name= styled("h2")`
  label:Name;
  color: ${theme.black};
  font-size: 1.3rem;
`;
export const Job= styled("span")`
  label:Job;
  color: ${theme.gray};
  font-size: 0.9rem;
`;