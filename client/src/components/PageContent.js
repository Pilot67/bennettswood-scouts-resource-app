import React from "react";
import { InfoContainer } from "./PageContent.Styled";

const PageContent = ({content}) => {

  return (
    <InfoContainer>
      <h1>{content.title}</h1>
      <br />
      <p>{content.description}</p>
    </InfoContainer>
  );
};

export default PageContent;
