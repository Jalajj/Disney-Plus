import React from 'react'
import styled from "styled-components"

function Detail() {
    return (
        <Container>
              <Background>
                  <img src="/images/Detail2.jpg" />
              </Background>
              <ImageTitle>
                  <img src="/images/viewers-disney.png" alt="imagetitle" />
              </ImageTitle>
              <Controls>
              <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
              </PlayButton>
              <TrailorButton>
              <img src="/images/play-icon-white.png" />
              <span>Trailor</span>
              </TrailorButton>
              <AddButton>
                    <span>+</span>
              </AddButton>
              <GroupWatchButton>
                  <img src="/images/group-icon.png" />
              </GroupWatchButton>

              </Controls>
              <SubTitle>
                 So You Enjoy Watching Disney Movie ?
              </SubTitle>
              <Description>
 Disney movie's are gift's specially for our childhood . These movie's have a lot to offer for 
 any movie lover who like's adventure's, romance, drama, emotion, mystery , thrill and what not. If you haven't watched any disney movies yet 
 you should definetly give it a try. By just clicking on the play button you will be able to watch my favourite movie, just kidding those 
 button's are just for show!
              </Description>
        </Container>
  
     
    )
}

export default Detail

const Container = styled.div `
min-height calc(100vh - 70px);
padding: 0 calc(3.5vw+ 5px);

`
const Background = styled.div `
 position:fixed;
 top:0;
 left:0;
 bottom:0;
 right:0;
 z-index:-1;
 
 
 img{
   height:100%;
   width:100%;
   object-fit:cover;
 }
`
const ImageTitle = styled.div `
 height:30vh;
 min-height:170px;
 min-width:200px;
 width:35vh;

 img {
     margin-left:5%;
     width:100%;
     height:100%;
     opacity: 1;
     z-index: 1;
     object-fit:cover;
 }
`
const Controls= styled.div `
 display: flex;
 align-items:center;
 margin-left:2%;
`
const PlayButton = styled.button `
  margin-left:1%;
  border-radius:4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right:22px;
  letter-spacing:1.8px;
  display:flex;
  align-items:center;
  height: 56px;
  background:rgba(0,0,0,0.3);
  border:none;
  cursor:pointer;
  &:hover {
      background: rgb(198, 198, 198);
  }
`
const TrailorButton = styled(PlayButton) `
background:rgba(0,0,0,0.3);
border:1pxsolid rgb(249, 249, 249);
color: rgb(249,249,249);
text-transform:uppercase;
`
const AddButton = styled.button`
width:44px;
margin-right:16px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border: 2px solid white;
background-color:rgba(0, 0, 0, 0.6);
cursor:pointer;
span{
    font-size:30px;
}
`
const GroupWatchButton = styled(AddButton) `
background:rgb(0, 0 ,0);

`
const SubTitle = styled.div `
margin-left:3%;
color: rgb(249, 249, 249);
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description = styled.div `
margin-left:3%;
 line-height: 1.4;
 height:30%;
 width:65%;
 font-size: 20px;
 
 margin-top:16px;
 color:rgb(249, 249, 249);
`
