import React from 'react'
import * as S from './styles'
import { Menu_enum } from '../../../enuns/menu_enum'

type MenuProps = {
  menuItemSelected: Menu_enum
}

const menuItens = Object.values(Menu_enum).map((item) => item)

const Menu = ({ menuItemSelected }: MenuProps) => {
  function returnPath(menuItem: string) {
    if (menuItem === 'Inicio') return '/'
    if (menuItem === 'Cursos') return '/curso'
    if (menuItem === 'Vagas') return '/vagas'
    if (menuItem === 'Noticias') return '/noticias'
    if (menuItem === 'Contato') return '/contato'
  }

  return (
    <S.Container>
      <S.LogoImg src="assets/images/logo.png" alt="logo" />

      <S.menuHamburguer
        alt="menu hamburguer"
        src="assets/images/menu_hamburguer.png"
      />

      <S.Menu>
        {menuItens.map((item) => (
          <S.MenuItem selected={item === menuItemSelected} key={Math.random()}>
            <a href={returnPath(item)}>{item}</a>
          </S.MenuItem>
        ))}
      </S.Menu>
      <S.SocialMedias>
        <S.SocialMediaItem>
          <img alt="logoInstagram" src="assets/images/InstagramLogo.png" />
        </S.SocialMediaItem>
        <S.SocialMediaItem>
          <img alt="logoFacebook" src="assets/images/FacebookLogo.png" />
        </S.SocialMediaItem>
        <S.SocialMediaItem>
          <img alt="logoLinkedin" src="assets/images/LinkedinLogo.png" />
        </S.SocialMediaItem>
      </S.SocialMedias>
    </S.Container>
  )
}

export default Menu
