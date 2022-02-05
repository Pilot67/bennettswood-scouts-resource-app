import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../utils/queries";

import Auth from "../utils/Auth.js";
import UserForm from "../components/UserForm";
import {
  Background,
  PageContainer,
  InfoContainer,
  ResourceCard,
} from "./Resources.Styled";

const UserAccount = () => {
  const [userData, setUserData] = useState();
  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: {id: 2},
    refetchOnMount: "always",
    force: true,
  });

  console.log(data)
  //const userdata = data?.users || [];


  useEffect(() => {
    // getUserFromDatabase(2)

  }, []);



  return (
    <>
      <Background>
        <PageContainer>
          <InfoContainer>
            <ResourceCard>
              {userData ? <UserForm userData={userData} /> : "Loading"}
            </ResourceCard>
          </InfoContainer>
        </PageContainer>
      </Background>
    </>
  );
};

export default UserAccount;
