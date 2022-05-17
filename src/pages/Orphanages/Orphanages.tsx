import { Link } from 'react-router-dom'
import { Marker, Popup } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import L from 'leaflet'

import { Map } from 'ui'
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
        <Map>
          <Marker icon={happyMapIcon} position={[-27.2092052, -49.6401092]}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className='map-popup'
            >
              Lar das meninas
              <Link to={'/orphanages/1'}>
                <FiArrowRight size={20} color='#fff' />
              </Link>
            </Popup>
          </Marker>
        </Map>
      </S.Container>
    </>
  )
}
