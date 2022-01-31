import styled from 'styled-components';

export const LoginTitle = styled.h1`
display: block;
width: 100%;
text-align: center;
font-size: 3rem;
color: var(--bw-Black);
font-weight: bold;
padding: 1rem;
`

export const LoginForm = styled.form `
display: flex;
flex-direction: column;
align-items: flex-start;
min-width: 40vw;
background-color: transparent;
`;

export const InputLabel = styled.label `
font-size: 1.25rem;
margin-top: 1rem;
`
export const InputField = styled.input`
font-size: 1.25rem;
border-radius: 4px;
border: 1px solid var(--bw-Black);
color: var(--bw-Black);
padding: 10px;
width: 100%;
`
export const SubmitBtn = styled.button`
font-size: 1.75rem;
padding: .5rem 1rem;
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
    font-size: 1.25rem;
    margin: 1rem 0;

  }
`

