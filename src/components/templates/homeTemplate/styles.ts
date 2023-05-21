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
`

export const WrapperCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
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
`
