import styled from "styled-components";
import JupiterColor from "../../utils/Color";

export const HeroContainer = styled.div`
  color: white;
  height: 55vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 5vw;
  align-items: center;

  @media screen and (max-width: 768px) {
    left: 40%;
  }
`;

export const HeroHeader = styled.h1`
  font-size: 65px;
  color: #61468b;
  text-align: center;
  margin: 120px 50px 0px;
  width: 50vw;

  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 90vw;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

export const MainContainer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  /* gap: 5vw; */
  /* text-align: justify; */

  /* width: auto; */
  /* height: auto; */
  /* padding: 20px; */
  background-color: #eeede7;
  :hover {
    background-color: #e2ded0;
    transition: 200ms;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  flex-flow: column nowrap;
  justify-content: space-between;
  /* gap: 5vw; */
  text-align: justify;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerHeader = styled.h4`
  margin-top: 0;
  padding-bottom: 10px;
  width: fit-content;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;

  :hover {
    border-bottom: 2px solid white;
    transition: 200ms;
    color: white;
  }
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
  align-items: center;

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

// *styles are defined for section on image

// export const HeroContainer = styled.div`
//   position: relative;
//   color: white;
//   height: 60vh;
// `;

// export const HeroImage = styled.img`
//   width: 100%;
//   height: 60vh;
//   object-fit: cover;
// `;

// export const SectionContainer = styled.section`
//   position: absolute;
//   left: 20%;
//   top: 50%;
//   transform: translate(-50%, -50%);

//   @media screen and (max-width: 768px) {
//     left: 40%;
//   }
// `;

// export const SectionHeader = styled.h1`
//   font-size: 45px;

//   @media screen and (max-width: 768px) {
//     font-size: 25px;
//   }
// `;
