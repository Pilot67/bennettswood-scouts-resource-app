import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Auth from "../utils/Auth.js";
import NewUserForm from "../components/NewUserForm";
import {
  Background,
  PageContainer,
  InfoContainer,
  ResourceCard,
} from "./Resources.Styled";

const UserAccount = () => {
  let { id } = useParams();
  id = parseInt(id);
  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            <ResourceCard>
              <NewUserForm getUserId={id} />
            </ResourceCard>
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default UserAccount;
