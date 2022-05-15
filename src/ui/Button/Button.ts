import styled, { css } from 'styled-components'

import { theme } from 'config/Theme'

const variants = {
  yellow: css`
    color: ${theme.colors.yellow[900]};
    background: ${theme.colors.yellow[500]};

    &:focus {
      outline: ${theme.colors.yellow[500]} solid 0.3rem;
      outline-offset: 0.3rem;
    }

    &:hover {
      background: ${theme.colors.blue[200]};
      color: ${theme.colors.blue[800]};
      outline-color: ${theme.colors.blue[200]};
    }
  `,
  blue: css`
    background: ${theme.colors.blue[500]};

    &:focus {
      outline: ${theme.colors.blue[500]} solid 0.3rem;
      outline-offset: 0.3rem;
    }

    &:hover {
      background: ${theme.colors.blue[500]};
      color: ${theme.colors.white};
      outline-color: ${theme.colors.blue[500]};
    }
  `,
  green: css`
    background: ${theme.colors.green[500]};

    &:focus {
      outline: ${theme.colors.green[500]} solid 0.3rem;
      outline-offset: 0.3rem;
    }
  `,
}

const sizes = {
  small: css`
    width: 4rem;
    height: 4rem;
    border-radius: 1.2rem;
  `,
  medium: css`
    width: 6.4rem;
    height: 6.4rem;
  `,
  large: css`
    width: 8rem;
    height: 8rem;
    border-radius: 3rem;
    border: 0.2rem solid transparent;
  `,
}

type Props = {
  full?: boolean
  auto?: boolean
  size: keyof typeof sizes
  variant: keyof typeof variants
}

export const Button = styled.button.attrs((props) => ({
  full: false,
  auto: true,
  size: 'medium',
  variant: 'blue',
  ...props,
}))<Props>`
  display: grid;
  position: relative;
  place-items: center;
  transition: all 0.3s;

  ${({ variant }) => variants[variant]};
  ${({ size }) => sizes[size]};

  ${({ auto }) =>
    auto &&
    css`
      width: auto;
    `}

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
`
