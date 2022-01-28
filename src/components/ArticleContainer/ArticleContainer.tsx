import React from "react";
import styled from "styled-components";
import JupiterColor from "../../utils/Color";

type ArticleProps = {
  header: string;
  subHeader: string;
  children: any;
};

const ArticleContainer: React.FunctionComponent<ArticleProps> = (
  props: ArticleProps
) => {
  return (
    <StyledArticle>
      <ContainerHeader>{props.header}</ContainerHeader>
      <ContainerSubHeader>{props.subHeader}</ContainerSubHeader>
      <StyledContent>{props.children}</StyledContent>
    </StyledArticle>
  );
};

export default ArticleContainer;

const StyledArticle = styled.div`
  width: 80%;
  margin: auto;
  padding: 150px 0px;
`;

const ContainerHeader = styled.h4`
  margin-top: 0;
  padding-bottom: 10px;
  width: fit-content;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
  color: #61468b;
`;

const ContainerSubHeader = styled.h5`
  margin: 0;
  font-size: 20px;
  color: #835bc1;
  font-style: italic;
`;

const StyledContent = styled.p`
  margin-top: 10px;
  font-size: 30px;
`;
