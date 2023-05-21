import React from 'react'
import LayoutTemplate from '../layoutTemplate'
import { Menu_enum } from '../../../enuns/menu_enum'
import * as S from './styles'

const courses = [
  {
    srcImg: 'assets/images/vacina.png',
    title: 'enfermagem'
  },
  {
    srcImg: 'assets/images/computador.png',
    title: 'desenvolvimento de sistemas'
  },
  {
    srcImg: 'assets/images/processo.png',
    title: 'recursos humanos'
  },
  {
    srcImg: 'assets/images/despesas.png',
    title: 'administração'
  },
  {
    srcImg: 'assets/images/cana-de-acucar.png',
    title: 'açúcar e álcool'
  },
  {
    srcImg: 'assets/images/agricultura.png',
    title: 'agropecuária'
  },
  {
    srcImg: 'assets/images/vaca.png',
    title: 'zootecnia'
  },
  {
    srcImg: 'assets/images/financeiro.png',
    title: 'agronegócio'
  }
]

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

        <S.WrapperCards>
          <S.CardGray>
            <p>
              Mantida pelo governo do Estado de São Paulo, os cursos oferecidos
              – além de qualidade ímpar – são totalmente gratuitos, levando para
              toda a população um ensino de qualidade e a oportunidade de
              aprender uma profissão.
            </p>
          </S.CardGray>
          <S.CardRed>
            <p>
              Contando com um corpo docente extremamente qualificado e estrutura
              física moderna, os cursos oferecidos nesta unidade se destacam
              pela qualidade de ensino, onde o aluno realmente aprende conteúdos
              relevantes, de maneira fácil e didática.{' '}
            </p>
          </S.CardRed>
          <S.CardBlue>
            <p>
              Baseado em uma didática prática, os alunos são envolvidos em
              conteúdos que abordam as diversas realidades do mercado, formando
              assim mão de obra qualificada e proporcionando uma experiência
              diferenciada para o aluno.
            </p>
          </S.CardBlue>
        </S.WrapperCards>
        <S.CoursesSection>
          <h2>Cursos técnicos</h2>
          <S.WrapperCourses>
            {courses.map((item) => (
              <S.CardCourse key={Math.random()}>
                <img src={item.srcImg} alt={item.title} />
                <p>{item.title}</p>
              </S.CardCourse>
            ))}
          </S.WrapperCourses>
        </S.CoursesSection>
      </S.Container>
    </LayoutTemplate>
  )
}

export default HomeTemplate
