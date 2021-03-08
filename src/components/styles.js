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
  }

  main {
    height:calc(100vh - 64px);
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
`;

export const HeaderStyle = styled.header`
  overflow: hidden;
  background-color: #405d49;
  padding: 5px 20px;
  display:flex;
  align-items:center;

  img{
    width:100px;
  }

  div:nth-child(1){
    flex:95%;
  }

  div:nth-child(2){
    flex:5%;
    display:flex;
    align-items:center;
  }

  button {
    background-color: #405d49;
    color: white;
    border:1px solid white;
    border-radius:20px;
    cursor:pointer;
    margin-left:10px;
    padding:5px 10px;
  }

  button:hover {
    background-color: black;
    color: white;
    border-color:black;
  }

  span {
    color:white;
    font-size:14px;
  }
`;

export const FormTitle = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;

  img {
    width:200px;
    margin-bottom:20px;
  }

  h2 {
    color:black;
    font-weight:lighter;
    font-size:17px;
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

  input:focus-visible{
    outline:none;
    box-shadow: 0 0 3px #0366d6;
  }
`;

export const GitInfosContainer = styled.div`
  margin-top:15px;
  display:flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  padding: 20px;
  width:300px;
  transition: 0.5s all;

  img {
    width:120px;
    border-radius:100%;
  }

  button {
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: black;
    color:white;
    height: 30px;
    margin-top:15px;
  }
`;

export const GitInfosFollowersContainer = styled.div`
  margin-top:15px;
  width:100%;
  display:flex;
`;

export const GitInfosFollowers = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex:50%;

  div {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-radius: 100%;
    padding:5px;
    width:32px;
    margin-top:10px;
    background-color:black;
    color:white;
  }
`;

export const Error = styled.div`
  margin-top:15px;
  color:black;
  font-size:15px;
  text-align:center;
`;

export const ContainerRepos = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  height:130px;
  padding: 20px 60px;
  height:100%;
  justify-content:center;
  align-items:center;
  align-content:center;
`;

export const ReposCardsStyle = styled.div`
  flex:0 0 200px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  height:100px;
  box-shadow: 1px 1px 5px black;

  button{
    background-color:#405d49;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    color:white;
    text-decoration:none;
    border-radius: 5px;
    border: 1px solid black;
    cursor:pointer;
  }
`;

export const ContainerButtonModal = styled.div`
  width: 60px;
  position: absolute;
  top: 20px;
  right: -0px;

  button{
    background:transparent;
    border:none;
    font-size:16px;
    cursor:pointer;
  }
`;
