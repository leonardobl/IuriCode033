import React from 'react'
import Menu from '../../Molecules/menu'
import { Menu_enum } from '../../../enuns/menu_enum'
import * as S from './styles'

type LayoutProps = {
  menuItemSelected: Menu_enum
  children: JSX.Element
}

const LayoutTemplate = ({ children, menuItemSelected }: LayoutProps) => {
  return (
    <>
      <Menu menuItemSelected={menuItemSelected} />
      {children}
      <>
        <S.Footer>
          <S.FooterLogo alt="Logo" src="assets/images/footerimg.png" />
          <S.FooterSection1>
            <S.FooterSection1Wrapper>
              <img src="assets/images/globo.png" alt="globo" />
              <div>
                <p>Rua Codelândia, 1367</p>
                <span>Cafelândia, SP</span>
              </div>
            </S.FooterSection1Wrapper>

            <S.FooterSection1Wrapper>
              <img src="assets/images/Phone.png" alt="phone" />
              <p>+55 14 9999-9999</p>
            </S.FooterSection1Wrapper>

            <S.FooterSection1Wrapper>
              <img src="assets/images/EnvelopeSimple.png" alt="envelope" />
              <p>+centropaulasouza@etec.sp.gov.br</p>
            </S.FooterSection1Wrapper>
          </S.FooterSection1>

          <S.FooterSection2>
            <h3>Sobre a Etec Cafelândia</h3>
            <p>
              Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
              Moreira Martins Aguiar se destaca no ensino médio e técnico,
              recebendo constantemente menções e congratulações em todo o estado
              de São Paulo.{' '}
            </p>
            <S.FooterSection2Wrapper>
              <img src="assets/images/InstagramLogo.png" alt="instagram" />
              <img src="assets/images/FacebookLogo.png" alt="facebook" />
              <img src="assets/images/LinkedinLogo.png" alt="linkedin" />
            </S.FooterSection2Wrapper>
          </S.FooterSection2>
        </S.Footer>

        <S.Rodape>
          <p>
            Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os
            direitos reservados.
          </p>
        </S.Rodape>
      </>
    </>
  )
}

export default LayoutTemplate
