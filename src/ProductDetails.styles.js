import styled from "styled-components";
import { Heading4 } from 'ui-components';

export const PriceText = styled(Heading4)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`

export const Image = styled.img`
  width: 75px;
`;

export const Title = styled.div`
  flex: 1;
  padding-left: ${({ theme }) => `${theme.gridSize * 3}px`};
`;

export const Delete = styled.a`
  cursor: pointer;
`;
