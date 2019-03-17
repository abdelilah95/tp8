import React from 'react';
import Styled from 'styled-components';
const Header =Styled.div`
padding:2em;
background:papayawhip;
font-size:25px;
font-weight:bold;
font-style:italic;
margin-bottom:20px;
`
export default (props)=>(
<Header>
    Bienvenue sur ReactJS
    {props.children}
</Header>
)