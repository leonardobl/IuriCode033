import React from 'react'
import LayoutTemplate from '../layoutTemplate'
import { Menu_enum } from '../../../enuns/menu_enum'
import * as S from './styles'

const CoursesTemplate = () => {
  return (
    <LayoutTemplate menuItemSelected={Menu_enum.CURSOS}>
      <S.Container>
        <S.SectionCourse>
          <S.ContainerFoto>
            <p>foto do curso</p>
          </S.ContainerFoto>
          <S.SectionCourseContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vitae vestibulum iaculis lacus aliquam convallis dolor risus.
              Velit vitae in lectus facilisis arcu tempor. Tempus dolor
              convallis accumsan nulla mi amet. Vulputate risus neque tellus
              faucibus molestie sem mauris. Semper quis orci scelerisque lectus.
              Leo sollicitudin cursus diam maecenas posuere at malesuada
              maecenas. Facilisis nunc nunc pellentesque libero arcu et leo
              dignissim. Pretium nulla leo pharetra, fermentum magnis. Odio
              molestie nec, vulputate tellus tellus.
            </p>
            <S.SectionCourseContentWrapper>
              <S.SectionCourseContentItem>
                <img src="assets/images/sol.png" alt="sol" />
                <div>
                  <p>Período:</p>
                  <span>Noturno</span>
                </div>
              </S.SectionCourseContentItem>
              <S.SectionCourseContentItem>
                <img src="assets/images/User.png" alt="user" />
                <div>
                  <p>Coordenação:</p>
                  <span>Iuri Silva</span>
                </div>
              </S.SectionCourseContentItem>
              <S.SectionCourseContentItem>
                <img src="assets/images/pendulo.png" alt="pendulo" />
                <div>
                  <p>Duração:</p>
                  <span>2 anos</span>
                </div>
              </S.SectionCourseContentItem>
            </S.SectionCourseContentWrapper>
          </S.SectionCourseContent>
        </S.SectionCourse>

        <S.SectionObjective>
          <h3>Objetivos gerais</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vitae
            vestibulum iaculis lacus aliquam convallis dolor risus. Velit vitae
            in lectus facilisis arcu tempor. Tempus dolor convallis accumsan
            nulla mi amet. Vulputate risus neque tellus faucibus molestie sem
            mauris. Semper quis orci scelerisque lectus. Leo sollicitudin cursus
            diam maecenas posuere at malesuada maecenas. Facilisis nunc nunc
            pellentesque libero arcu et leo dignissim. Pretium nulla leo
            pharetra, fermentum magnis. Odio molestie nec, vulputate tellus
            tellus.
          </p>
        </S.SectionObjective>
      </S.Container>
    </LayoutTemplate>
  )
}

export default CoursesTemplate
