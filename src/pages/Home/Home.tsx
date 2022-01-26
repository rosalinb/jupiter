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
import Card from "../../components/Card/Card";

export default function Home() {
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
          <Card header="Courses we offer">
            You can find interview related questions of all Levels (Easy,
            Medium, Hard) from languages like C, C++ , Java along with Frontend
            related technology like HTML, CSS, Java Script and Frameworks like
            React.
          </Card>

          <Card header="MCQ questions with hints">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </Card>

          <Card header="Bookmarks to later visit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt esse quaerat sunt tempore maxime amet, quidem maiores odio
            at quos excepturi magni cum obcaecati dicta nesciunt reiciendis,
            magnam hic.
          </Card>
        </Styled.BoxContainer>

        <div style={{ marginTop: "50px" }}>
          <AnchorLink to="https://www.youtube.com/" shouldOpenNewPage={true}>
            Youtube Link
          </AnchorLink>
          <AnchorLink to="https://www.facebook.com/">Facebook Link</AnchorLink>
        </div>
      </main>
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
