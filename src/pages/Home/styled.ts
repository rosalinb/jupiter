import styled from "styled-components";
import JupiterColor from "../../utils/Color";

export const HeroContainer = styled.div`
  position: relative;
  color: white;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

export const SectionContainer = styled.section`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 768px) {
    left: 40%;
  }
`;

export const SectionHeader = styled.h1`
  font-size: 45px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const BoxTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: ${JupiterColor.primaryText};
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 5vw;
  text-align: justify;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxHeader = styled.h4`
  margin-top: 0;
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px ${JupiterColor.primaryColor};
  transition: 300ms;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    /* box-shadow: 5px 5px 15px 5px ${JupiterColor.primaryColor}; */
    box-shadow: 5px 5px 15px 5px ${JupiterColor.primaryColor};
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 100px auto auto;
  border-top: 1px solid lightgrey;
  padding: 40px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterCopyInfo = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const SocialMediaInfo = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
