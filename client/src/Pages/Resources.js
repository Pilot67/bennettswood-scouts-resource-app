import React, { useState } from "react";
import { FormatDate } from "../utils/helpers";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RESOURCES } from "../utils/queries";
import { DELETE_RESOURCE } from "../utils/mutations";
import { FaEdit, FaTrash, FaComments } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import AddResourcesComment from "../components/AddResourcesComment";
import AddEditResource from "../components/AddEditResource";
import ShowComments from "../components/ShowComments";
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
  ResourcesBtnContainer,
  ResourcesBtn,
  ResourcesBannerContainer,
} from "./Resources.Styled";
import { Select, InputLabel, RadioContainer } from "../components/Login.Styled";

const Resources = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showComments, setShowComments] = useState({ show: false, id: 0 });
  const [showModal, setShowModal] = useState({ id: "", show: false });
  const [showModalResource, setShowModalResource] = useState({
    show: false,
    resourceData: { id: 0, title: "", description: "", link: "", image: "" },
  });
  const { loading, data, refetch } = useQuery(GET_RESOURCES, {
    variables: { filter: "" },
    refetchOnMount: "always",
    notifyOnNetworkStatusChange: true,
    force: true,
  });
  const userData = data?.resources || [];
  const [deleteResource] = useMutation(DELETE_RESOURCE);

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
    refetch();
  };

  const handleFilterSelect = (event) => {
    setSelectedOption(event.target.value);
    refetch({ filter: event.target.value });
  };

  const handleCommentShow = (id) => {
    setShowComments({ show: true, id });
  };

  if (loading) {
    return (
      <Background>
        <ResourcesBannerContainer>
          <PageContainer>
            <InfoContainer>
              <ResourceTitleContainer>
                <ResourceTitle>Loading....</ResourceTitle>
              </ResourceTitleContainer>
            </InfoContainer>
          </PageContainer>
        </ResourcesBannerContainer>
      </Background>
    );
  }

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
          <RadioContainer>
            <InputLabel htmlFor="section"> Filter: </InputLabel>
            <Select
              name="selection"
              onChange={handleFilterSelect}
              value={selectedOption}
            >
              <option value="">All</option>
              <option value="GENERAL">General</option>
              <option value="JOEYS">Joeys</option>
              <option value="CUBS">Cubs</option>
              <option value="SCOUTS">Scouts</option>
              <option value="VENTURERS">Venturers</option>
            </Select>
          </RadioContainer>
        </ResourcesBannerContainer>
        <PageContainer>
          <InfoContainer>
            {userData.length > 0 ? (
              <>
                {userData.map((resource, index) => {
                  return (
                    <ResourceCard key={index}>
                      <ResourcesBtnContainer>
                        {Auth.getProfile().data.id === resource.user.id ||
                        Auth.getProfile().data.user_type === "ADMIN" ? (
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

                      {showComments.show && resource.id === showComments.id ? (
                        <>
                          <ResourceTitleInfo
                            onClick={() => setShowComments({ show: false })}
                            style={{cursor:"pointer", color:"var(--scouts)"}}
                          >
                            Hide Comments <RiArrowUpSFill />
                          </ResourceTitleInfo>
                          {resource.resourcescomments.map((commentData) => {
                            return (
                              <ShowComments
                                key={commentData.id}
                                comment={commentData}
                                setRefetchData={() => refetch()}
                              />
                            );
                          })}
                        </>
                      ) : (
                        <ResourceTitleInfo
                          onClick={() => handleCommentShow(resource.id)}
                          style={{cursor:"pointer", color:"var(--scouts)"}}
                        >
                          View Comments <RiArrowDownSFill />
                        </ResourceTitleInfo>
                      )}
                    </ResourceCard>
                  );
                })}
              </>
            ) : (
              <h3>Nothing to display..</h3>
            )}
          </InfoContainer>
        </PageContainer>
      </Background>

      <AddResourcesComment
        id={showModal.id}
        setRefetchData={() => refetch()}
        showModal={showModal.show}
        setShowModal={setShowModal}
      />
      <AddEditResource
        id={showModalResource.id}
        setRefetchData={() => refetch()}
        showModalResource={showModalResource.show}
        setShowModalResource={setShowModalResource}
        resourceData={showModalResource.resourceData}
      />
    </>
  );
};

export default Resources;
