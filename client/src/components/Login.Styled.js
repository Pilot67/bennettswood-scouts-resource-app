import styled from 'styled-components';

export const Title = styled.h1`
display: block;
width: 100%;
text-align: center;
font-size: 3rem;
color: var(--bw-Black);
font-weight: bold;
padding: 2rem;
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
export const SignupIn = styled.button`
position: absolute;
top: 0;
left: 0px;
font-size: 1rem;
padding: .25rem ;
margin: 1.5rem 1.5rem;
background-color: transparent;
color: var(--bw-Blue);
border: none;
text-decoration: underline;
border-bottom: 1px solid var(--bw-Black);

/* border-radius: 1rem; */
/* box-shadow: 0px 2px 7px var(--bw-Black); */
align-self: center;
cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  :hover {
    /* box-shadow: 0px 0px 2px var(--bw-Black); */
    transform: translate(-1px, -1px);
  }
  @media screen and (max-width: 1024px) {
    font-size: .75rem;
    margin: .5rem .5rem;

  }
`

