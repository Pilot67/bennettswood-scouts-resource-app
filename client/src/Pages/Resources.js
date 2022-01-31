import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RESOURCES } from "../utils/queries";
import Auth from "../utils/auth";

import PageContent from "../components/PageContent";
import { Background } from "./Resources.Styled";

const Resources = () => {
  const [refetchData, setRefetchData] = useState(true);
  const { loading, data, refetch } = useQuery(GET_RESOURCES, {
    refetchOnMount: "always",
    force: true,
  });
  const userData = data?.resources || [];

  if (refetchData) {
    if (refetchData) {
      setRefetchData((prev) => (prev = !prev));
      refetch();
    }
  }

  return (
    <Background>
      <PageContent title={"Leader Resources"} />
      {userData.map((resource, index) => {
        return (
          <div key={index}>
            <h1>{resource.title}</h1>
            <p>{resource.description}</p>
            <p>{resource.link}</p>
            <p>{resource.image}</p>
            <p>{resource.section}</p>
            <p>{resource.date}</p>
            <p>
              {resource.user.first_name} {resource.user.last_name}
            </p>
            <br />
            {resource.resourcescomments.map((comment, index) => {
              return (
                <div key={index}>
                  <p>{comment.title}</p>
                  <p>{comment.description}</p>
                  <p>{comment.date}</p>
                  <p>{comment.user.first_name} {comment.user.last_name}</p>
                  <br />
                </div>
              );
            })}
            <p></p>
            <br />
          </div>
        );
      })}
    </Background>
  );
};

export default Resources;
