import React from "react";
import { InfoContainer, Heading, Paragraph, List } from "./PageContent.Styled";

const PageContent = ({content}) => {

  return (
    <InfoContainer>
      <Heading style={{textAlign:"center"}}>{content.title}</Heading>
      <br />
      <Paragraph>{content.description}</Paragraph>
      <List>
        {content.points.map((item)=>{
          return (<li>{item}</li>)
        })}
      </List>
      <Paragraph>{content.footer}</Paragraph>
    </InfoContainer>
  );
};

export default PageContent;
