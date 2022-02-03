import styled from "styled-components";

export const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  color: var(--bw-Black);
  font-weight: bold;
  padding: 2rem 0 0.5rem 0;
  @media screen and (max-width: 1024px) {
    font-size: 1.75rem;
  }
`;
export const ErrorMessage = styled.h3`
  display: block;
  width: 100%;
  text-align: center;
  height: 1.5rem;
  font-size: 1.5rem;
  color: var(--bw-Red);
  font-weight: bold;
  padding: 0.5rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
    height: 1.25rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 90%;
  background-color: transparent;
`;

export const InputLabel = styled.label`
  font-size: 1.25rem;
  margin-top: 1rem;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const InputField = styled.input`
  font-size: 1.25rem;
  border-radius: 4px;
  border: 1px solid var(--bw-Black);
  color: var(--bw-Black);
  padding: 10px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const TextField = styled.textarea`
  font-size: 1.25rem;
  border-radius: 4px;
  border: 1px solid var(--bw-Black);
  color: var(--bw-Black);
  padding: 10px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
export const SubmitBtn = styled.button`
  font-size: 1.75rem;
  padding: 0.5rem 1rem;
  margin: 1.5rem 0;
  background-color: var(--bw-Blue);
  color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 2px 7px var(--bw-Black);
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  :hover {
    box-shadow: 0px 0px 2px var(--bw-Black);
  }
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`;
export const SignupIn = styled.button`
  position: absolute;
  top: 0;
  left: 0px;
  font-size: 1rem;
  padding: 0.25rem;
  margin: 1.5rem 1.5rem;
  background-color: transparent;
  color: var(--bw-Blue);
  border: none;
  text-decoration: underline;
  border-bottom: 1px solid var(--bw-Black);
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  :hover {
    transform: translate(-1px, -1px);
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.75rem;
    margin: 0.5rem 0.5rem;
  }
`;

export const Group = styled.div`
  align-self: center;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
`;
export const RadioContainer = styled.div`
  padding: 0 1rem;
`;
export const RadioButton = styled.input`
  font-size: 1.25rem;
  border-radius: 4px;
  border: 1px solid var(--bw-Black);
  color: var(--bw-Black);
  padding: 0;
  margin-right: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Select = styled.select`
  font-size: 1.25rem;
  border-radius: 4px;
  border: 1px solid var(--bw-Black);
  color: var(--bw-Black);
  padding: 0;
  margin-right: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

`