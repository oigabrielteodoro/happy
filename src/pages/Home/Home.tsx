import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import { Assets } from 'assets'
import { Button, Logo } from 'ui'

import * as S from './Home.styled'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <S.CitiesBox>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </S.CitiesBox>
      </S.Header>
      <S.Content>
        <S.Column>
          <img
            src={Assets.Title}
            alt='Texto escrito leve a felicidade para o mundo'
          />
          <p>
            Visite orfanatos e mude o dia
            <br />
            de muitas crianças.
          </p>
        </S.Column>
        <Link to='/orphanages'>
          <Button
            tabIndex={2}
            full={false}
            auto={false}
            size='large'
            variant='yellow'
          >
            <FiArrowRight size={32} strokeWidth={3} />
          </Button>
        </Link>
        <S.KidsImage src={Assets.Kids} alt='Três crianças brincando' />
      </S.Content>
    </S.Container>
  )
}
