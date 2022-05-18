import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { theme } from 'config'
import { Logo, Button } from 'ui'

import * as S from './Menu.styled'

export function Menu() {
  return (
    <S.Container>
      <Logo.OnlyIcon width='48' height='56' />
      <Link to='/'>
        <Button variant='darkBlue' size='small'>
          <FiArrowLeft size={16} color={theme.colors.white} />
        </Button>
      </Link>
    </S.Container>
  )
}
