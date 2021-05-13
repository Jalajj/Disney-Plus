import React from 'react'
import styled from "styled-components";

function Login() {
    return (
    <Container>
   
           <CTA>
             <CTALogoOne src="/images/cta-logo-one.svg"/>
             <SignUp >JALAJ'S DEMO</SignUp>
             <Description>
             I have just made a demo this dont have to do with api or real time movies . This is just a represententation of my React skills
             ,and nothing more.
             </Description>
             <CTALogotwo src="/images/cta-logo-two.png" /> 
           </CTA>
    </Container>
            
       
    )
}

export default Login
 
const Container = styled.div `
height: calc(100vh - 70px);
align-items:top;
justify-content:center;
display:flex;
position:relative;


&:before{
     background:url('/images/login-background.jpg') center center / cover no-repeat fixed;
     content:"";
     position:absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     z-index:-1;}
 
`
const CTA = styled.div `
max-width:650px;
padding:80px 40px;
width : 70%;
display:flex;
margin-top:100px;
align-items:center;
flex-direction:column;
`
const CTALogoOne = styled.img `


`
const SignUp = styled.a `
width:100%;
background-color: #0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
cursor:pointer;
border-radius: 4px;
text-align:center;
font-size:18px;
letter-spacing:1.5px;
transition:all 250ms;
margin-top:8px;
margin-bottom:12px;
&:hover{
    background:#0483ee;
}
`
const Description = styled.p `
margin-top:3%;
margin-bottom:4%;
fonr-size:11px;
letter-spacing:1.5px;
text-align:center;
line-heioght:1.5;
`
const CTALogotwo = styled.img `
height:10%;
width:100%;
`