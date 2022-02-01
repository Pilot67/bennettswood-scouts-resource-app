import React, { useState } from "react";
import { FormatDate } from "../utils/helpers";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RESOURCES } from "../utils/queries";
import { DELETE_RESOURCE } from "../utils/mutations";
import { FaEdit, FaTrash, FaComments } from "react-icons/fa";

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
  CommentDescription,
  ResourcesBtnContainer,
  ResourcesBtn,
} from "./Resources.Styled";

const Resources = () => {
  const [refetchData, setRefetchData] = useState(true);
  const { loading, data, refetch } = useQuery(GET_RESOURCES, {
    refetchOnMount: "always",
    force: true,
  });
  const userData = data?.resources || [];
  const [deleteResource, { error }] = useMutation(DELETE_RESOURCE);

  if (refetchData) {
    if (refetchData) {
      setRefetchData((prev) => (prev = !prev));
      refetch();
    }
  }

  const handleAddComment = async (id) => {
    console.log(id);
  };

const handleDeleteResource = async (id) =>{
  try {
    const { data } = await deleteResource({ variables: { id } });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  setRefetchData(true);
}

  return (
    <Background>
      <PageContainer>
        <InfoContainer>
          {userData.map((resource, index) => {
            return (
              <ResourceCard key={index}>
                <ResourcesBtnContainer>
                  {Auth.getProfile().data.id === resource.user.id ? (
                    <>
                      <ResourcesBtn onClick={()=>handleDeleteResource(resource.id)} color={"black"} background={"--bw-Red"}>
                        <FaTrash />
                      </ResourcesBtn>
                      <ResourcesBtn color={"white"} background={"--scouts"}>
                        <FaEdit />
                      </ResourcesBtn>
                    </>
                  ) : null}
                  <ResourcesBtn
                    onClick={() => handleAddComment(resource.id)}
                    color={"white"}
                    background={"--bw-Blue"}
                  >
                    <FaComments />
                  </ResourcesBtn>
                </ResourcesBtnContainer>
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
                    <CommentContainer key={index}>
                      <ResourceTitleContainer>
                        <ResourceTitleInfo>{comment.title}</ResourceTitleInfo>
                        <ResourceTitleInfo>
                          Posted by: {comment.user.first_name}{" "}
                          {comment.user.last_name}
                        </ResourceTitleInfo>
                        <ResourceTitleInfo>
                          {FormatDate(comment.date)}
                        </ResourceTitleInfo>
                      </ResourceTitleContainer>
                      <CommentDescription>
                        {comment.description}
                      </CommentDescription>
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
