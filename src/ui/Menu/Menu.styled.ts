import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  background: ${theme.colors.blue[500]};
  width: 9.6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing[5]} ${theme.spacing[4]};
`
