import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import HoverVideoPlayer from "react-hover-video-player"

function Viewers() {
    return (
  
        <Container>
        <Link to="/login">
       
        <Wrap>
        <HoverVideoPlayer
          videoSrc="/videos/disney.mp4"
          pausedOverlay={
              <img src="/images/viewers-disney.png"/>
          }
          />  
          </Wrap>
          
        </Link>
        <Link to="/login">
        <Wrap>
        <HoverVideoPlayer
          videoSrc="/videos/pixar.mp4"
          pausedOverlay={
              <img src="/images/viewers-pixar.png"/>
          }
          />  
          </Wrap>
        </Link>
          <Link to="/login">
          <Wrap>
          <HoverVideoPlayer
          videoSrc="/videos/marvel.mp4"
          pausedOverlay={
              <img src="/images/viewers-marvel.png"/>
          }
          /> 
          </Wrap>
          </Link>
          <Link to="/login">
          <Wrap>
          <HoverVideoPlayer
          videoSrc="/videos/star-wars.mp4"
          pausedOverlay={
              <img src="/images/viewers-starwars.png"/>
          }
          /> 
          </Wrap>
          </Link>
          <Link to="/login">
          <Wrap>
          <HoverVideoPlayer
          videoSrc="/videos/national-geographic.mp4"
          pausedOverlay={
              <img src="/images/viewers-national.png"/>
          }
          /> 
          </Wrap>
          </Link>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
margin:3%;
padding: 30px 0px 26px;
display:grid;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div `
border-radius:10px;
border: 3px solid rgba(249, 249,249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transform: all 250ms cubic-bezier(0.25,0.46,0.45, 0.94) 0s;

img {
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color:rgba(249,249,249, 0.8);

}
`
