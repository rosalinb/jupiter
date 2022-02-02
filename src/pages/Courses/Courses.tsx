import React from "react";
import * as Styled from "./styled";
import Card from "../../components/Card/Card";
import LinkButton from "../../components/LinkButton/LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const courses = [
  {
    courseName: "HTML",
    courseDescription: " Master Frontend by mastering the Courses",
    linkName: "HTML",
  },
  {
    courseName: "CSS",
    courseDescription: " Master Frontend by mastering the Courses",
    linkName: "CSS",
  },
  {
    courseName: "JavaScript",
    courseDescription: " Master Frontend by mastering the Courses",
    linkName: "JavaScript",
  },
  {
    courseName: "React",
    courseDescription: " Master Frontend by mastering the Courses",
    linkName: "React",
  },
];

function Courses() {
  return (
    <>
      <Styled.CourseHeroContainer>
        <Styled.CourseHeroHeader>
          Master Frontend by mastering the Courses
        </Styled.CourseHeroHeader>
        <Styled.CourseHeroSubHeader>
          Choose from different levels
        </Styled.CourseHeroSubHeader>

        <Styled.HeroIconsContainer>
          <Styled.HeroIcon icon={faHtml5}></Styled.HeroIcon>
          <Styled.HeroIcon icon={faCss3}></Styled.HeroIcon>
          <Styled.HeroIcon icon={faJs}></Styled.HeroIcon>
          <Styled.HeroIcon icon={faReact}></Styled.HeroIcon>
        </Styled.HeroIconsContainer>
      </Styled.CourseHeroContainer>

      <Styled.CourseSectionContainer>
        {courses &&
          courses.map((course) => {
            const { courseName, courseDescription, linkName } = course;

            return (
              <Card
                primaryHeader={courseName}
                secondaryHeader={courseDescription}
                width="35vw"
              >
                <LinkButton
                  text={linkName}
                  to="/"
                  padding="15px 35px"
                ></LinkButton>
              </Card>
            );
          })}
      </Styled.CourseSectionContainer>
    </>
  );
}

export default Courses;
