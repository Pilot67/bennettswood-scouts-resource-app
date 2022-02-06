import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";

import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

import NewUserForm from "../components/NewUserForm";

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

const AllUsers = () => {
  const { loading, data, refetch } = useQuery(GET_ALL_USERS, {
    refetchOnMount: "always",
    force: true,
  });
  const allUserData = data?.getAllUsers || [];

  const [deleteUser] = useMutation(DELETE_USER);

  const handleDeleteUser = async (id) => {

    try {
      const { data } = await deleteUser({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
     refetch(true);
  };
  const handleEditUser = (id) => {};

  if (loading) {
    return <>Loading Data.....</>;
  }

  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            {allUserData.map((userInfo, index) => {
              return (
                <ResourceCard key={index}>
                  <ResourcesBtnContainer>
                    <ResourcesBtn
                      onClick={() => handleDeleteUser(userInfo.id)}
                      color={"black"}
                      background={"--bw-Red"}
                    >
                      <FaTrash />
                    </ResourcesBtn>
                    <ResourcesBtn
                      onClick={handleEditUser(userInfo.id)}
                      color={"white"}
                      background={"--scouts"}
                    >
                      <FaEdit />
                    </ResourcesBtn>
                  </ResourcesBtnContainer>

                  <ResourceTitleContainer>
                    <ResourceTitleInfo>
                      {userInfo.first_name} {userInfo.last_name}
                    </ResourceTitleInfo>
                  </ResourceTitleContainer>
                  <ResourceTitleContainer>
                    <ResourceTitleInfo>{userInfo.email}</ResourceTitleInfo>
                  </ResourceTitleContainer>
                  <ResourceTitleContainer>
                    <ResourceTitleInfo>
                      User type: {userInfo.user_type}
                    </ResourceTitleInfo>
                    <ResourceTitleInfo>
                      Authorised:
                      {userInfo.authorised_user ? (
                        <ResourcesBtn
                          onClick={() => handleDeleteUser(userInfo.id)}
                          color={"black"}
                          background={"--scouts"}
                        >
                          <FaCheck />
                        </ResourcesBtn>
                      ) : (
                        <ResourcesBtn
                          onClick={() => handleDeleteUser(userInfo.id)}
                          color={"black"}
                          background={"--bw-Red"}
                        >
                          <FaTimes />
                        </ResourcesBtn>

)}
                    </ResourceTitleInfo>
                  </ResourceTitleContainer>
                </ResourceCard>
              );
            })}
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default AllUsers;
