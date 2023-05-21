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

  @media (max-width: 420px) {
    padding: 10px 20px;

    h1 {
      font-family: 'Mukta';
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 53px;
      text-align: center;
    }

    p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      text-align: center;
    }
  }
`

export const WrapperCards = styled.div`
  display: flex;
  height: 300px;

  @media (max-width: 420px) {
    display: none;
  }
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

export const CoursesSection = styled.section`
  padding: 100px 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 50px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 66px;
    color: #111827;
  }

  @media (max-width: 420px) {
    padding: 40px 24px;

    h2 {
      font-size: 32px;
    }
  }
`

export const WrapperCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`

export const CardCourse = styled.div`
  background: #f3f4f6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 70px;
  gap: 24px;

  P {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #111827;
  }

  @media (max-width: 420px) {
    p {
      font-size: 24px;
    }
  }
`

export const Estagios = styled.div`
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 420px) {
    display: block;
  }
`

export const EstagiosCardRed = styled.div`
  background: #b91c1c;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  @media (max-width: 420px) {
    height: 150px;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 53px;
    }
  }
`

export const EstagiosCardGray = styled.div`
  background: #f3f4f6;
  padding: 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    color: #111827;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #353436;
  }

  a {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #b91c1c;
  }

  @media (max-width: 420px) {
    padding: 24px;
    gap: 24px;

    p {
      font-size: 20px;
    }

    span {
      font-size: 16px;
    }

    a {
      font-size: 14px;
    }
  }
`

export const EstagiosCardGrayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Noticias = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 50px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 66px;
    text-align: center;
    color: #111827;
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 32px;
    }
  }
`

export const WrapperCardsNoticias = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 80px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

export const CardNoticia = styled.div`
  max-width: 380px;
  height: 340px;
  background: #f3f4f6;
  border-radius: 4px;
`

export const RedContainer = styled.div`
  background: #b91c1c;
  height: 50%;
`

export const CardNoticiaContent = styled.div`
  padding: 24px;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #111827;
    margin-bottom: 16px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #353436;
  }

  @media (max-width: 420px) {
    p {
      font-size: 24px;
    }

    span {
      font-size: 16px;
    }
  }
`

export const ButtonVerMaisNoticias = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  gap: 8px;
  border: none;
  outline: none;
  width: 292px;
  height: 61px;
  cursor: pointer;
  background: #b91c1c;
  border-radius: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`
