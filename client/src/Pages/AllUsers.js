import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS } from "../utils/queries";
import { DELETE_USER , UPDATE_USER} from "../utils/mutations";
import { useNavigate } from "react-router-dom";

import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

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
  const navigate = useNavigate();
  const { loading, data, refetch } = useQuery(GET_ALL_USERS, {
    refetchOnMount: "always",
    force: true,
  });
  const allUserData = data?.getAllUsers || [];

  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);


   const handleDeleteUser = async (id) => {
    try {
      const { data } = await deleteUser({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
     refetch(true);
   };

  const handleEditUser = (id) => {
    console.log("Edit User", id)
    navigate(`/UserAccount/${id}`)

  };

  
  const handleUpdateAuthorisation = async ({id, authorisedUser}) =>{
    try {
      const { data } = await updateUser({
        variables: { id, authorisedUser },
      });
      console.log("Data returned from update:", data);
    } catch (e) {
      console.error(e.message);
    }
    refetch(true);
  }
  
  
  
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
                      onClick={() => handleEditUser(userInfo.id)}
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
                          onClick={()=>handleUpdateAuthorisation({id:userInfo.id, authorisedUser:false})}
                          color={"black"}
                          background={"--scouts"}
                        >
                          <FaCheck />
                        </ResourcesBtn>
                      ) : (
                        <ResourcesBtn
                          onClick={()=>handleUpdateAuthorisation({id:userInfo.id, authorisedUser:true})}
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
