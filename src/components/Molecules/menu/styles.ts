import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 420px) {
    justify-content: space-between;

    padding: 0 10px;
  }
`

export const LogoImg = styled.img`
  height: 53px;
  max-width: 180px;
  display: block;
`

export const menuHamburguer = styled.img`
  cursor: pointer;

  @media (min-width: 420px) {
    display: none;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex: 1;
  gap: 56px;
  max-width: max-content;

  @media (max-width: 420px) {
    display: none;
  }
`

export const MenuItem = styled.li<{ selected: boolean }>`
  a {
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: ${({ selected }) => (selected ? '#B91C1C' : '#353436')};
  }
`

export const SocialMedias = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex: 1;
  gap: 56px;
  max-width: max-content;

  @media (max-width: 420px) {
    display: none;
  }
`

export const SocialMediaItem = styled.li`
  cursor: pointer;

  img {
    width: 24px;
  }
`
