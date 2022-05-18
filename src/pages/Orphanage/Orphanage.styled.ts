import styled from 'styled-components'

import { theme } from 'config'

export const PageTitle = styled.span`
  text-align: center;
  color: ${theme.colors.neutral[500]};
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: 600;
  margin-top: ${theme.spacing[6]};
`

export const Container = styled.div`
  margin: ${theme.spacing[6]} auto 8.2rem;
  border-radius: 2rem;
  background: ${theme.colors.white};
  border: 0.1rem solid ${theme.colors.neutral[200]};

  > main {
    padding: ${theme.spacing[4]} ${theme.spacing[5]} 8rem;
  }
`

export const Banner = styled.img`
  border-radius: 2rem 2rem 0 0;
  object-fit: cover;
`

export const ImgList = styled.ul`
  display: grid;
  grid-gap: ${theme.spacing[3]};
  grid-template-columns: repeat(6, 1fr);

  li > img {
    border-radius: 2rem;
  }
`

export const Content = styled.section`
  margin-top: 6.4rem;
  padding: 0 ${theme.spacing[7]};
`

export const Title = styled.h1`
  font-size: 5.4rem;
  line-height: 5.4rem;
  font-weight: 700;
  color: ${theme.colors.neutral[900]};
`

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: 600;
  color: ${theme.colors.neutral[800]};
  max-width: 54.8rem;
  margin-top: ${theme.spacing[5]};
`
