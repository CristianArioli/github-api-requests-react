import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }  

  html {
    font-family: 'Roboto', sans-serif;
    height:100vh;
  }

  body {
    height:100%;
    display: flex;
    justify-content:center;
    align-items:center;
  }
`;

export const FormTitle = styled.div`
  display:flex;
  justify-content:center;

  img {
    width:200px;
    margin-bottom:20px;
  }

  h2 {
    color:black;
    font-weight:lighter;
    font-size:18px;
  }
`;

export const Form = styled.form`
   border: 1px solid #e1e4e8;
   border-radius: 5px;
   padding: 20px;
   width:300px;
`;

export const Button = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: black;
  color:white;
  height: 30px;
  margin-top:15px;
`;

export const FormGroup = styled.div`
  display:flex;
  justify-content:left;
`;

export const FieldsForm = styled.label`
  color: black;
  font-size: 14px;
  margin-bottom:10px;
  width:100%;
  font-weight:normal;

  input {
    display:block;
    width:100%;
    border-radius:5px;
    margin-top:5px;
    height:25px;
    border: 1px solid #e1e4e8;
  }
`;
