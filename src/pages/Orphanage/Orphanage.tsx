import { Menu } from 'ui'

import * as S from './Orphanage.styled'

export function Orphanage() {
  return (
    <>
      <Menu />
      <S.PageTitle>Orfanato</S.PageTitle>
      <S.Container>
        <header>
          <S.Banner
            src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=336'
            alt='Crianças'
            height={336}
            width={708}
          />
        </header>
        <main>
          <S.ImgList>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
            <li>
              <img
                src='https://images.unsplash.com/photo-1621354429610-d9be6a144b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=94&q=94'
                alt='Crianças 2'
                width={94}
                height={94}
              />
            </li>
          </S.ImgList>
          <S.Content>
            <S.Title>Orf. Esperança</S.Title>
            <S.Description>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </S.Description>
          </S.Content>
        </main>
      </S.Container>
    </>
  )
}
