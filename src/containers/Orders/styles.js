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

export const ContainerItens = styled.div`
padding: 50px 35px;
display: flex;
flex-direction: column;
gap: 26px;
z-index: 99;
`

export const H1 = styled.h1`
color: #FFF;
font-size: 28px;
line-height: 30px;
text-align: center;
margin-bottom: 20px;
`

export const Button = styled.button`
width: 342px;
height: 60px;
gap: 14px;
border: none;
margin-top: 100px;
color: #FFFFFF;
background-color:	#666666;
cursor: pointer;
font-size: 15px;

&:hover{
  opacity: .8;
}

&:active{
  opacity: .6;
}
`
export const Order = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
border: none;
width: 340px;
height: 60px;
outline: none;
padding-left: 13px;
margin-top: 30px;
color: #FFFFFF;
z-index: 99;

p {
font-size: 18px;
font-weight: normal;
font-style: normal;
line-height: 28px;
color: #FFFFFF;
}

button {
background: none;
border: none;
cursor: pointer;
margin-right: 5px;
z-index: 99;
}
`