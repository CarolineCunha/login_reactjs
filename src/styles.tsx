import styled from 'styled-components';

export const Body = styled.body`
  height: 100vh;
  background-color: #6fc0b2;
  font-family: Roboto, Arial, sans-serif;
`;

export const H1 = styled.h1`
  font-size: 32px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
  padding: 0px 10px;
  position: relative;
  margin-top: 200px;
`

export const Html = styled.html`
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    height: 100vh;
    `

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
export const Form = styled.form`
    margin: 20px 0;
    background-color: white;
    padding: 80px 100px;
    border-radius: 5px;
    animation: fade;
    animation-duration: 1s;
    `