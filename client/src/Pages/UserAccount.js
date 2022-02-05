import React, {useState} from "react";
import Auth from "../utils/Auth.js";
import UserForm from "../components/UserForm"
import {
  Background,
  PageContainer,
  InfoContainer,
  ResourceCard,
} from "./Resources.Styled";

const UserAccount = () => {

const userData = Auth.getProfile()


  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            <ResourceCard>
                <UserForm userData={userData}/>
            </ResourceCard>
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default UserAccount;
