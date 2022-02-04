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
    const [showModal, setShowModal] = useState(true);



  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            <ResourceCard>
                <UserForm />
            </ResourceCard>
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default UserAccount;
