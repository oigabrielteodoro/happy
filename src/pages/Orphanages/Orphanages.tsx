import { Link } from 'react-router-dom'
import { Marker, Popup } from 'react-leaflet'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import L from 'leaflet'

import { theme } from 'config'
import { Button, Map } from 'ui'
import mapMarkerImg from 'assets/mapMarker.svg'

import { Menu } from './Menu'

import * as S from './Orphanages.styled'

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

export function Orphanages() {
  return (
    <>
      <Menu />
      <S.Container>
        <Map interactive>
          <Marker icon={happyMapIcon} position={[-27.2092052, -49.6401092]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className='map-popup'
            >
              Lar das meninas
              <Link to='/orphanages/1'>
                <Button variant='blue' size='small'>
                  <FiArrowRight size={20} color={theme.colors.white} />
                </Button>
              </Link>
            </Popup>
          </Marker>
        </Map>
      </S.Container>
      <S.CreateButtonWrapper>
        <Link to='/createOrphanage'>
          <Button variant='blue' size='medium'>
            <FiPlus size={28} color={theme.colors.white} />
          </Button>
        </Link>
      </S.CreateButtonWrapper>
    </>
  )
}
