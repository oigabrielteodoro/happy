import type { ReactNode } from 'react'
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'

import { MAPBOX_TOKEN } from 'config'

type Props = {
  children: ReactNode
  interactive?: boolean
} & MapContainerProps

export function Map({ children, interactive = false, ...props }: Props) {
  return (
    <MapContainer
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={false}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`}
      />
      {children}
    </MapContainer>
  )
}
