import React from "react";
import { InfoContainer } from "./PageContent.Styled";

const PageContent = (props) => {
  return (
    <InfoContainer>
      <h1>{props.title}</h1>
    </InfoContainer>
  );
};

export default PageContent;
