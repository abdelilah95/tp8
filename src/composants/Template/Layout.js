import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Styled from 'styled-components';
import Menu from './partials/Menu';

const Container = Styled.div`
width:80%;
margin: 0 auto;
`
const Layout =(props)=>(
<React.Fragment>
    <Header>
        <Menu />
        </Header>
<Container>
{props.children}
</Container>
<Footer />
</React.Fragment>
)
export default Layout;