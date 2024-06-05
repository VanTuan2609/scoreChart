import styled, { css } from "styled-components";

interface Props {
  $isCurrent: boolean;
}

export const LanguageItem = styled.div<Props>`
  padding: 5px 12px;
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme, $isCurrent }) =>
      !$isCurrent && theme.colorBorderSecondary};
  }

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      background: ${({ theme }) => theme.colorPrimaryBg};
    `}
`;
