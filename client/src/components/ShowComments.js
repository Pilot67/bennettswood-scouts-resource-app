import React from "react";
import { FormatDate } from "../utils/helpers";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../utils/mutations";
import { FaTrash } from "react-icons/fa";
import Auth from "../utils/Auth.js";

import {
  ResourceTitleContainer,
  ResourceTitleInfo,
  CommentContainer,
  CommentDescription,
  ResourcesBtnContainer,
  ResourcesBtn,
} from "../Pages/Resources.Styled";

const ShowComments = ({ comment, setRefetchData, id }) => {
  const [deleteResourcesComment] = useMutation(DELETE_COMMENT);
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
      <CommentContainer key={id}>
        <ResourceTitleContainer>
          <ResourceTitleInfo>{comment.title}</ResourceTitleInfo>
          <ResourceTitleInfo>{FormatDate(comment.date)}</ResourceTitleInfo>
        </ResourceTitleContainer>
        <ResourceTitleContainer>
          <ResourceTitleInfo>
            Posted by: {comment.user.first_name} {comment.user.last_name}
          </ResourceTitleInfo>
        </ResourceTitleContainer>

        <CommentDescription>{comment.description}</CommentDescription>

        {Auth.getProfile().data.id === comment.user.id ||
        Auth.getProfile().data.user_type === "ADMIN" ? (
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
    </>
  );
};
export default ShowComments;
