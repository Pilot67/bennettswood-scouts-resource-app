import styled from "styled-components";

export const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
export const Heading = styled.h1 `
text-align: center;
align-self: center;
padding: .5rem 0;
`
export const List = styled.ul `
margin-left: 2rem;
padding: 1rem 0;
list-style: disc;
`
export const Paragraph = styled.p `
margin: 0;
text-align: left;
padding: .5rem 0;
`
