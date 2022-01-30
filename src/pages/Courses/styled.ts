import styled from "styled-components";
import JupiterColor from "../../utils/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CourseHeroContainer = styled.div`
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  width: 100%;
  margin: auto;
  padding: 80px 0px 50px;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const CourseHeroHeader = styled.h1`
  color: ${JupiterColor.primaryText};
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 60px;
  text-align: center;
  width: 50vw;
  margin: auto;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 95vw;
  }
`;

export const CourseHeroSubHeader = styled.h3`
  color: ${JupiterColor.primaryText};
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-top: 50px;
`;

export const HeroIcons = styled(FontAwesomeIcon)`
  :hover {
    color: black;
    transition: 200ms;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const CourseSectionContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${JupiterColor.primarySectionColor};
  padding: 50px;
  gap: 5vw;

  :hover {
    background-color: ${JupiterColor.primarySectionHoverColor};
    transition: 200ms;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;
