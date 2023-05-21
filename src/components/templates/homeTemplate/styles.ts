import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 160px 456px;
  gap: 8px;
  height: 538px;
  left: 0px;
  top: 100px;
  background: #111827;

  h1 {
    font-family: 'Mukta';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 80px;
    color: #ffffff;
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    text-align: center;
    color: #f3f4f6;
  }
`

export const WrapperCards = styled.div`
  display: flex;
  height: 300px;
`

export const CardGray = styled.div`
  background: #353436;
  padding: 40px;
  display: flex;
  align-items: center;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #ffffff;
  }
`
export const CardRed = styled.div`
  background: #b91c1c;
  padding: 40px;
  display: flex;
  align-items: center;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #ffffff;
  }
`
export const CardBlue = styled.div`
  background: #481a8f;
  padding: 40px;
  display: flex;
  align-items: center;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #ffffff;
  }
`
