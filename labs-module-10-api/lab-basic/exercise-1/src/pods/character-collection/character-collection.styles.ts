import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const searchForm = css`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const searchField = css`
  flex: 1 1 240px;
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ul {
    justify-content: center;
  }
`;
