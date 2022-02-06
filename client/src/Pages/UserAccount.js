import React from "react";

import Auth from "../utils/Auth.js";
import NewUserForm from "../components/NewUserForm";
import {
  Background,
  PageContainer,
  InfoContainer,
  ResourceCard,
} from "./Resources.Styled";

const UserAccount = () => {

  const getUserId=Auth.getProfile().data.id

  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            <ResourceCard>
              <NewUserForm getUserId={getUserId}/>
            </ResourceCard>
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default UserAccount;
