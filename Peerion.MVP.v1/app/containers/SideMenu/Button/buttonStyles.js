import { css } from 'styled-components';

export const normalButtonStyles = css`
  display: inline-block;
  padding: 0.4em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;
  min-width: 10em;
  background: #faa9c5;
  &:active {
    background: #7bf6d9;
  }
`;

export const activeButtonStyles = css`
  display: inline-block;
  padding: 0.4em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;
  min-width: 10em;
  background: #7bf6d9;
`;
