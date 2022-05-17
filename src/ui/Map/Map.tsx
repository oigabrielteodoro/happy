import { ReactNode } from 'react'
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet'

type Props = {
  children: ReactNode
  interactive?: boolean
} & MapContainerProps

const MAPBOX_TOKEN = import.meta.env.VITE_APP_MAPBOX_TOKEN as string

export function Map({ children, interactive = false, ...props }: Props) {
  return (
    <MapContainer
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
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
