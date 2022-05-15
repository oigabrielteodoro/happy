import styled from 'styled-components'

import { theme } from 'config'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.withGradient.blue};
  padding: 12rem 0;
`

export const Header = styled.header`
  max-width: ${theme.grid.maxWidth};
  width: 100%;
  margin: 0 auto 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.main`
  max-width: ${theme.grid.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const Column = styled.section`
  display: flex;
  flex-direction: column;

  > img {
    max-width: 39.4rem;
    max-height: 29rem;
  }

  > p {
    margin-top: ${theme.spacing[6]};
    font-size: 600;
    font-size: ${theme.font.sizes.subtitle};
    line-height: ${theme.font.lineHeights.subtitle};
    color: ${theme.colors.white};
  }
`

export const CitiesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${theme.font.sizes.subtitle};
  line-height: ${theme.font.lineHeights.subtitle};
  text-align: right;
  color: ${theme.colors.white};

  strong {
    font-weight: 800;
  }

  span {
    font-weight: 600;
  }
`

export const KidsImage = styled.img`
  position: absolute;
  left: 45%;
  top: 7.2rem;
`
