import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
display: flex;
margin: 1% auto;
width: 100%;
height: 75px;
max-width: 900px;
color: inherit;
text-decoration: none;
align-items: center;
justify-content: center;
`
const NavItem = styled.li`
margin: 2%;
text-decoration: none;
list-style: none;
color: dodgerblue;
font-size: 2rem;
`


export default class NavBarComponent extends Component {
        render() {
        return(
            <div>
                <NavBar>
                    <NavItem>Home</NavItem>
                    <NavItem >Add Smurf</NavItem>
                </NavBar>
                </div>
        
        )
    }}
