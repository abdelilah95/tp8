import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
}from 'react-router-dom'

import Layout from  './composants/Template/Layout';

import Home from './composants/pages/Home';
import Apropos from './composants/pages/Apropos';
import Articles from './composants/pages/Articles';
import Article from './composants/pages/Article';

export default()=>(
    <Router>
        <Switch>
            <Redirect from ="/" exact to="/home"/>

            <Route path='/home' exact component={() =><Layout><Home /></Layout>}/>
            <Route path='/a-propos-de-nous' exact component={() =><Layout><Apropos /></Layout>}/>
            <Route path='/articles' exact component={() =><Layout><Articles /></Layout>}/>
            <Route path='/article/:id' exact component={(props) =><Layout><Article articleId={props.match.params.id} /></Layout>}/>
<Route render ={()=>(
    <Layout>
        <h1>ERREUR 404</h1>
        <p>la page que vous demander est introuvable</p>
        </Layout>
)}/>
        </Switch>
        </Router>
)

