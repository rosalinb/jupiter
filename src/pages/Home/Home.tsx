import { url } from "inspector";
import React from "react";
import * as Styled from "./styled";
import heroImage from "../../images/keyboard_hero.jpeg";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router";
import LinkButton from "../../components/LinkButton/LinkButton";
import AnchorLink from "../../components/AnchorLink/AnchorLink";
import IconButton from "../../components/IconButton/IconButton";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";

export default function Home() {
  return (
    <div>
      <Styled.HeroContainer>
        <Styled.HeroHeader>
          Enhance your frontend interview skills
        </Styled.HeroHeader>
        <LinkButton text="Get Started" to="/signin"></LinkButton>
      </Styled.HeroContainer>
      <div style={{ margin: "auto", width: "100%" }}>
        <Styled.HeroImage src={heroImage}></Styled.HeroImage>
      </div>
      {/* <Styled.HeroContainer>
        <Styled.HeroImage src={heroImage}></Styled.HeroImage>
        <Styled.SectionContainer>
          <div style={{ maxWidth: 500 }}>
            <Styled.SectionHeader>
              Learn and enhance your skills for any upcoming interview
            </Styled.SectionHeader>
          </div>
          <LinkButton text="Get Started" to="/signin"></LinkButton>
        </Styled.SectionContainer>
      </Styled.HeroContainer> */}

      <Styled.MainContainer>
        <ArticleContainer
          header="Hand-picked Questions"
          subHeader="Carefully picked by experts"
        >
          <p>
            You can find interview related questions of all Levels (Easy,
            Medium, Hard) from languages like C, C++ , Java along with Frontend
            related technology like HTML, CSS, Java Script and Frameworks like
            React.
          </p>
        </ArticleContainer>

        <ArticleContainer
          header="Multiple Levels"
          subHeader="Based on difficulty level"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </p>
        </ArticleContainer>

        <ArticleContainer
          header="Two Test Modes"
          subHeader="Choose what suits you best"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </p>
        </ArticleContainer>
      </Styled.MainContainer>

      <Styled.Footer>
        <Styled.FooterCopyInfo>
          <h4 style={{ margin: 0 }}>Jupiter</h4>
          <div style={{ fontSize: 12 }}>&copy; Jupiter Pvt. Ltd. 2022</div>
        </Styled.FooterCopyInfo>
        <div>
          <Styled.SocialMediaInfo>
            <li>
              <IconButton
                to="https://www.twitter.com/"
                icon={faTwitter}
              ></IconButton>
            </li>
            <li>
              <IconButton
                to="https://www.facebook.com/"
                icon={faFacebook}
              ></IconButton>
            </li>
            <li>
              <IconButton
                to="https://www.linkedin.com/"
                icon={faLinkedin}
              ></IconButton>
            </li>
          </Styled.SocialMediaInfo>
        </div>
      </Styled.Footer>
    </div>
  );
}
