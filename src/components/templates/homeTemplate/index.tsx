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

        <S.Estagios>
          <S.EstagiosCardRed>
            <h3>Estágios e empregos</h3>
          </S.EstagiosCardRed>
          <S.EstagiosCardGray>
            <S.EstagiosCardGrayWrapper>
              <p>Lorem ipsum dolor sit amet</p>
              <span>Publicado em 00/00/2000</span>
              <a href="#">Mais mais sobre a vaga</a>
            </S.EstagiosCardGrayWrapper>
            <S.EstagiosCardGrayWrapper>
              <p>Lorem ipsum dolor sit amet</p>
              <span>Publicado em 00/00/2000</span>
              <a href="#">Mais mais sobre a vaga</a>
            </S.EstagiosCardGrayWrapper>
            <S.EstagiosCardGrayWrapper>
              <p>Lorem ipsum dolor sit amet</p>
              <span>Publicado em 00/00/2000</span>
              <a href="#">Mais mais sobre a vaga</a>
            </S.EstagiosCardGrayWrapper>
          </S.EstagiosCardGray>
        </S.Estagios>

        <S.Noticias>
          <h2>Notícias</h2>
          <S.WrapperCardsNoticias>
            <S.CardNoticia>
              <S.RedContainer />
              <S.CardNoticiaContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>Postado em 00/00/00</span>
              </S.CardNoticiaContent>
            </S.CardNoticia>
            <S.CardNoticia>
              <S.RedContainer />
              <S.CardNoticiaContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>Postado em 00/00/00</span>
              </S.CardNoticiaContent>
            </S.CardNoticia>
            <S.CardNoticia>
              <S.RedContainer />
              <S.CardNoticiaContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span>Postado em 00/00/00</span>
              </S.CardNoticiaContent>
            </S.CardNoticia>
          </S.WrapperCardsNoticias>
          <S.ButtonVerMaisNoticias>Ver mais notícias</S.ButtonVerMaisNoticias>
        </S.Noticias>
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
      </S.Container>
    </LayoutTemplate>
  )
}

export default HomeTemplate
