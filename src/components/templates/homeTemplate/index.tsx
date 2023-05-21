import React from 'react'
import LayoutTemplate from '../layoutTemplate'
import { Menu_enum } from '../../../enuns/menu_enum'
import * as S from './styles'

const HomeTemplate = () => {
  return (
    <LayoutTemplate menuItemSelected={Menu_enum.INICIO}>
      <S.Container>
        <S.Header>
          <h1>Helcy Moreira Martins Aguiar</h1>
          <p>
            Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
            Moreira Martins Aguiar se destaca no ensino médio e técnico,
            recebendo constantemente menções e congratulações em todo o estado
            de São Paulo.
          </p>
        </S.Header>
      </S.Container>
    </LayoutTemplate>
  )
}

export default HomeTemplate
