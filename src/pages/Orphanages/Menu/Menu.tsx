import { Logo } from 'ui'

import * as S from './Menu.styled'

export function Menu() {
  return (
    <S.Container>
      <Logo.OnlyIcon />
      <div>
        <h1>
          Escolha
          <br /> um orfanato no mapa
        </h1>
        <h3>
          Muitas crianças estão
          <br /> esperando a sua visita :)
        </h3>
      </div>
      <S.CitiesBox>
        <strong>Rio do Sul</strong>
        <span>Santa Catarina</span>
      </S.CitiesBox>
    </S.Container>
  )
}
