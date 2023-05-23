import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 70px 50px;
  background: #b91c1c;
  height: 350px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media (max-width: 420px) {
    height: max-content;
    padding: 50px 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-around;
  }
`

export const FooterLogo = styled.img`
  max-height: 80px;
  align-self: flex-start;

  @media (max-width: 420px) {
    align-self: center;
  }
`

export const FooterSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #f3f4f6;
  }

  @media (max-width: 420px) {
    justify-content: center;
    gap: 20px;

    p {
      font-size: 14px;
    }
  }
`

export const FooterSection1Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  img {
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
  }
`

export const FooterSection2 = styled.div`
  height: 100%;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    color: #f3f4f6;
    max-width: 320px;
    margin-bottom: 36px;
  }

  @media (max-width: 420px) {
    text-align: center;
  }
`

export const FooterSection2Wrapper = styled.div`
  display: flex;
  gap: 36px;

  img {
    background-color: #fff;
    padding: 6px;
    border-radius: 50%;
  }

  @media (max-width: 420px) {
    justify-content: center;
  }
`

export const Rodape = styled.div`
  height: 70px;
  background: #aa1818;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 70px;
    color: #ffffff;
    text-align: center;
  }

  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    padding: 10px 20px;

    p {
      font-size: 12px;
      line-height: 2;
    }
  }
`
