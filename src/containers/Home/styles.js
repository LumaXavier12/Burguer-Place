import styled from "styled-components";
import Background from "../../assets/burguer.jpg"

export const Container = styled.div`
background: url("${Background}");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100%;
z-index: 99;
`

export const InputLabel = styled.p`
color:#EEEE;
font-size: 22px;
line-height: 22px;
letter-spacing: -0.41px;
margin-left: 15px;
z-index: 99;
`

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;
background: rgba(200, 230, 230, 0.4);
color: #FFF;
border: none;
width: 340px;
height: 60px;
outline: none;
padding-left: 25px;
font-size: 18px;
`