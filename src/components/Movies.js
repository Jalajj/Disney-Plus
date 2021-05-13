import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';

function Movies() {


    return (
        <Container>
             <h4>Recommended for you</h4>
             <Content>
                <Link to="/detail">
                  <Wrap>
                      <img src="/images/Detail.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to="/detail">
                <Wrap>
                      <img src="/images/Detail2.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                 <Link to ="/detail">
                 <Wrap>
                      <img src="/images/Movie8.jpg" alt="venom"/>
                  </Wrap>
                 </Link>
                <Link to="/detail">
                <Wrap>
                      <img src="/images/Detail7.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                 <Link to ="/detail">
                 <Wrap>
                      <img src="/images/Detail3.jpg" alt="venom"/>
                  </Wrap>
                 </Link>
                <Link to="/detail">
                <Wrap>
                      <img src="/images/Detail4.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                 <Link to ="/detail">
                 <Wrap>
                      <img src="/images/Detail5.jpg" alt="venom"/>
                  </Wrap>
                 </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Detail6.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie4.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie5.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie6.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie7.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Detail1.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie2.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie9.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                <Link to ="/detail">
                <Wrap>
                      <img src="/images/Movie0.jpg" alt="venom"/>
                  </Wrap>
                </Link>
                  
                
                   
                  </Content>
                  
                 
        </Container>
            
     
    )
}

export default Movies
const Container =  styled.div`


`
const Content = styled.div `
margin-bottom:5%;
margin-top:2%;
display:grid;
grid-gap:5px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div `
margin-left:5%;
 border-radius:10px;
 overflow:hidden;
 border:3px solid rgba(249,249,249, 0.1);
 box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;

 img{
     width:100%;
     height:100%;
     object-fit:cover;
 }
 
 &:hover{
     box-shadow: rgb( 0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 /72%) 0px 30px 22px -10px;
     border-color: rgba(249,249, 249, 0.8);
 }
 img:hover{
    transform:scale(1.10);
 }

`




