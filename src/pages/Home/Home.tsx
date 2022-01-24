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

export default function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <Styled.HeroContainer>
        <Styled.HeroImage src={heroImage}></Styled.HeroImage>
        <Styled.SectionContainer>
          <div style={{ maxWidth: 500 }}>
            <Styled.SectionHeader>
              Learn and enhance your skills for any upcoming interview
            </Styled.SectionHeader>
            {/* <h4>Beginner or Experienced..Doesn't Matter</h4> */}
          </div>
          <LinkButton text="Get Started" to="/signin"></LinkButton>

          {/* <Button
            text="Get Started"
            onClick={() => {
              navigate("/signin");
            }}
          ></Button> */}
        </Styled.SectionContainer>
      </Styled.HeroContainer>

      <main style={{ width: "80%", margin: "auto" }}>
        <div>
          <Styled.BoxTitle>Featuring</Styled.BoxTitle>
        </div>

        <Styled.BoxContainer>
          <Styled.Box>
            <Styled.BoxHeader>Courses we offer</Styled.BoxHeader>
            You can find interview related questions of all Levels (Easy,
            Medium, Hard) from languages like C, C++ , Java along with Frontend
            related technology like HTML, CSS, Java Script and Frameworks like
            React.
          </Styled.Box>

          <Styled.Box>
            <Styled.BoxHeader>MCQ questions with hints </Styled.BoxHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </Styled.Box>

          <Styled.Box>
            <Styled.BoxHeader>Bookmarks to later visit</Styled.BoxHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </Styled.Box>
        </Styled.BoxContainer>
        <div style={{ marginTop: "50px" }}>
          {" "}
          <AnchorLink
            to="https://www.youtube.com/"
            text="Youtube Link"
            shouldOpenNewPage={true}
          ></AnchorLink>
          <AnchorLink
            to="https://www.facebook.com/"
            text="Facebook Link"
          ></AnchorLink>
        </div>
      </main>
      <Styled.Footer>
        <Styled.FooterCopyInfo>
          <h4 style={{ margin: 0 }}>Jupiter</h4>
          <div>&copy; Jupiter Pvt. Ltd. 2022</div>
        </Styled.FooterCopyInfo>
        <div>
          <Styled.SocialMediaInfo>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </li>
          </Styled.SocialMediaInfo>
        </div>
      </Styled.Footer>
    </div>
  );
}
