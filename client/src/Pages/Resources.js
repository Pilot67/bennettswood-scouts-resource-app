import React, { useState } from "react";
import { FormatDate } from "../utils/helpers";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RESOURCES } from "../utils/queries";
import { DELETE_RESOURCE, DELETE_COMMENT } from "../utils/mutations";
import { FaEdit, FaTrash, FaComments } from "react-icons/fa";
import AddResourcesComment from "../components/AddResourcesComment";
import AddEditResource from "../components/AddEditResource";

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
  ResourcesBannerContainer,
} from "./Resources.Styled";

const Resources = () => {
  const [refetchData, setRefetchData] = useState(false);
  const [showModal, setShowModal] = useState({ id: "", show: false });
  const [showModalResource, setShowModalResource] = useState({
    show: false,
    resourceData: { id: 0, title: "", description: "", link: "", image: "" },
  });
  const { loading, data, refetch } = useQuery(GET_RESOURCES, {
    refetchOnMount: "always",
    force: true,
  });
  const userData = data?.resources || [];
  const [deleteResource] = useMutation(DELETE_RESOURCE);
  const [deleteResourcesComment] = useMutation(DELETE_COMMENT);

  if (refetchData) {
    if (refetchData) {
      setRefetchData((prev) => (prev = !prev));
      refetch();
    }
  }

  const openModal = (id) => {
    setShowModal({ ...showModal, show: !showModal.show, id });
  };

  const openModalNew = () => {
    setShowModalResource({
      ...showModalResource,
      show: !showModalResource.show,
      resourceData: {
        id: 0,
        title: "",
        description: "",
        link: "",
        image: "",
        section: "GENERAL",
      },
    });
  };

  const editModal = ({ id, title, description, link, image, section }) => {
    setShowModalResource({
      ...showModalResource,
      show: !showModalResource.show,
      resourceData: { id, title, description, link, image, section },
    });
  };

  const handleDeleteResource = async (id) => {
    try {
      const { data } = await deleteResource({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
    setRefetchData(true);
  };

  const handleDeleteComment = async (id) => {
    try {
      const { data } = await deleteResourcesComment({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
    setRefetchData(true);
  };

  return (
    <>
      <Background>
        <ResourcesBannerContainer>
          <ResourcesBtn
            onClick={() => openModalNew()}
            color={"white"}
            background={"--scouts"}
          >
            Create new Post
          </ResourcesBtn>
        </ResourcesBannerContainer>
        <PageContainer>
          <InfoContainer>
            {userData.map((resource, index) => {
              return (
                <ResourceCard key={index}>
                  <ResourcesBtnContainer>
                    {Auth.getProfile().data.id === resource.user.id || Auth.getProfile().data.user_type === "ADMIN" ? (
                      <>
                        <ResourcesBtn
                          onClick={() => handleDeleteResource(resource.id)}
                          color={"black"}
                          background={"--bw-Red"}
                        >
                          <FaTrash />
                        </ResourcesBtn>
                        <ResourcesBtn
                          onClick={() => editModal(resource)}
                          color={"white"}
                          background={"--scouts"}
                        >
                          <FaEdit />
                        </ResourcesBtn>
                      </>
                    ) : null}
                    <ResourcesBtn
                      onClick={() => openModal(resource.id)}
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

                        {Auth.getProfile().data.id === comment.user.id || Auth.getProfile().data.user_type === "ADMIN"? (
                          <ResourcesBtnContainer>
                            <ResourcesBtn
                              onClick={() => handleDeleteComment(comment.id)}
                              color={"black"}
                              background={"--bw-Red"}
                            >
                              <FaTrash />
                            </ResourcesBtn>
                          </ResourcesBtnContainer>
                        ) : null}
                      </CommentContainer>
                    );
                  })}
                </ResourceCard>
              );
            })}
          </InfoContainer>
        </PageContainer>
      </Background>

      <AddResourcesComment
        id={showModal.id}
        setRefetchData={setRefetchData}
        showModal={showModal.show}
        setShowModal={setShowModal}
      />
      <AddEditResource
        id={showModalResource.id}
        setRefetchData={setRefetchData}
        showModalResource={showModalResource.show}
        setShowModalResource={setShowModalResource}
        resourceData={showModalResource.resourceData}
      />
    </>
  );
};

export default Resources;
