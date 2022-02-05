import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto 20px auto;
  padding: 3rem 3rem;
  width: 75%;
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  white-space: pre-line;
  border-radius: 4px;
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.8);
@media screen and (max-width: 768px) {
  width: 100%;
  padding: 1rem 1rem;
}
`;
