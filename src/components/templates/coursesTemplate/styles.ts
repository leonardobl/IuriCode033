import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px 0;

  @media (max-width: 420px) {
    padding: 40px 20px;
  }
`

export const SectionCourse = styled.section`
  padding: 0 352px 100px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 54px;

  @media (max-width: 420px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const ContainerFoto = styled.div`
  width: 488px;
  height: 488px;
  background: #b91c1c;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 66px;
    text-transform: uppercase;
    color: #ffffff;
  }

  @media (max-width: 420px) {
    width: 100%;
    max-height: 250px;

    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      text-transform: uppercase;
    }
  }
`
export const SectionCourseContent = styled.div`
  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #353436;
    margin-bottom: 32px;
  }

  @media (max-width: 420px) {
    > p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
    }
  }
`

export const SectionCourseContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const SectionCourseContentItem = styled.div`
  display: flex;
  gap: 20px;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #b91c1c;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #353436;
  }
`

export const SectionObjective = styled.section`
  background: #f3f4f6;
  padding: 48px 350px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 53px;
    color: #111827;
    margin-bottom: 16px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #111827;
  }
`
