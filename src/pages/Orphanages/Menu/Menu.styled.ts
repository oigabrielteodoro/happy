import styled, { keyframes } from 'styled-components'

import { theme } from 'config/Theme'

const fadeIn = keyframes`
  from {
    transform: translateX(-10rem);
  }

  to {
    transform: translateX(0);
  }
`

export const Container = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  background: ${theme.colors.withGradient.blue};
  padding: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 44rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  h1 {
    color: ${theme.colors.white};
    font-weight: 800;
    line-height: 4.2rem;
    font-size: 4rem;
  }

  h3 {
    margin-top: ${theme.spacing[4]};
    font-weight: 600;
    color: ${theme.colors.white};
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`

export const CitiesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.8rem;
  line-height: 2.7rem;
  text-align: left;
  color: ${theme.colors.white};

  strong {
    font-weight: 800;
  }

  span {
    font-weight: 600;
  }
`
