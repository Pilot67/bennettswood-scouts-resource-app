import React, { useState } from "react";
import { FormatDate } from "../utils/helpers";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RESOURCES } from "../utils/queries";
import Auth from "../utils/Auth.js";
import {
  Background,
  PageContainer,
  InfoContainer,
  ResourceCard,
  ResourceTitleContainer,
  ResourceTitle,
  ResourceTitleInfo,
  ContentContainer,
  ImageContainer,
  DescriptionContainer,
  Image,
  LinkContainer,
  CommentContainer,
} from "./Resources.Styled";

const Resources = () => {
  const [refetchData, setRefetchData] = useState(true);
  const { loading, data, refetch } = useQuery(GET_RESOURCES, {
    refetchOnMount: "always",
    force: true,
  });
  const userData = data?.resources || [];

  if (refetchData) {
    if (refetchData) {
      setRefetchData((prev) => (prev = !prev));
      refetch();
    }
  }

  return (
    <Background>
      <PageContainer>
        <InfoContainer>
          {userData.map((resource, index) => {
            return (
              <ResourceCard key={index}>
                <ResourceTitleContainer>
                  <ResourceTitle>{resource.title}</ResourceTitle>
                  <ResourceTitleInfo>
                    Posted by:{resource.user.first_name}{" "}
                    {resource.user.last_name}
                  </ResourceTitleInfo>
                </ResourceTitleContainer>
                <ResourceTitleContainer>
                  <ResourceTitleInfo>
                    Posted on {FormatDate(resource.date)}
                  </ResourceTitleInfo>
                  <ResourceTitleInfo>
                    Section: {resource.section}
                  </ResourceTitleInfo>
                </ResourceTitleContainer>
                <ContentContainer>
                  <DescriptionContainer>
                    <p>{resource.description}</p>
                  </DescriptionContainer>

                  <ImageContainer>
                    <Image src={resource.image} />
                  </ImageContainer>
                  {resource.link.length ? (
                    <LinkContainer>
                      <p>Link to the resource:</p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.link}
                      </a>
                    </LinkContainer>
                  ) : null}
                </ContentContainer>
                {resource.resourcescomments.map((comment, index) => {
                  return (
                    <CommentContainer>
                      <ResourceTitleContainer key={index}>
                        <ResourceTitleInfo>{comment.title}</ResourceTitleInfo>
                        <ResourceTitleInfo>
                          Posted by: {comment.user.first_name} {comment.user.last_name}
                        </ResourceTitleInfo>
                      </ResourceTitleContainer>
                        <p>{FormatDate(comment.date)}</p>
                        <p>{comment.description}</p>
                    </CommentContainer>
                  );
                })}
              </ResourceCard>
            );
          })}
        </InfoContainer>
      </PageContainer>
    </Background>
  );
};

export default Resources;
