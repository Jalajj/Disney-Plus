import React from 'react'
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { BrowserRouter,Link } from 'react-router-dom';

function Header() {
    return (
     <Nav>
        <Logo src = "/images/logo.svg" />
        <NavMenu >
        <Link to ="/">
        <a>
            <img src="/images/home-icon.svg" />
                  <span>HOME </span> 
              </a>
        </Link>
             
              <a>
                  <img src="/images/search-icon.svg" />
                  <span>SEARCH</span>
              </a>
              <a>
                  <img src="/images/watchlist-icon.svg" />
                  <span>WATCHLIST</span>
              </a>
              <a>
                  <img src="/images/original-icon.svg" />
                  <span>Original</span>
              </a>
              <a>
                  <img src="/images/movie-icon.svg" />
                  <span>MOVIES</span>
              </a>
              <a>
                  <img src="/images/series-icon.svg" />
                  <span>SERIES</span>
              </a>
               
        </NavMenu>
        <UserImg >
           <Avatar src="/images/Me.jpeg" />
        </UserImg>
    </Nav>          
    
    )
}

export default Header

const Nav = styled.div`
height: 70px;
bACKGROUND:#090B13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;
`

const Logo = styled.img `
width:80px;
`
const NavMenu = styled.div `
display:flex;
flex:1;
margin-left:25px;
align-items:center;

a{
    display:flex;
    align-items:center;
    padding: 0 12px;
    cursor:pointer;
    img {
       height:20px;
    }
    span {
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        

        &:after {
            content: "";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform:scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform:scaleX(1);
            opacity: 1;
        }
    }
}
`
const UserImg = styled.div`

cursor:pointer;

`