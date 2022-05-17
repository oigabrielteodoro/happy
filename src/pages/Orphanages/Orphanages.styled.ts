import styled from 'styled-components'

import { theme } from 'config'

export const Container = styled.main`
  width: calc(100vw - 44rem);
  height: 100vh;
  position: relative;
  display: flex;
  margin-left: auto;

  .leaflet-pane {
    z-index: ${theme.layers.base};
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: ${theme.colors.white};
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 2rem;
  }

  .map-popup .leaflet-popup-content {
    color: ${theme.colors.blue[800]};
    font-size: 2rem;
    font-weight: 700;
    margin: ${theme.spacing[1]} ${theme.spacing[2]};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    top: 50%;
    left: 0;
  }

  .map-popup .leaflet-popup-tip {
    display: none;
  }
`

export const CreateButtonWrapper = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: ${theme.layers.alwaysOnTop};
`
