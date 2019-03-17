import React, { Component } from 'react'
import axios from 'axios';
import ArticleExtract from './ArticleExtract';

export default class Articles extends Component {


    state={
        loading:true,
        articles:[]
    }

    getArticles=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({articles:response.data,loading:false})
        })
    }

    componentDidMount(){
        this.getArticles();
    }


    render() {

    return (
        <React.Fragment>
<h1>Liste des articles</h1>

        {this.state.loading &&
        <h2>Chargement en cours ...</h2>}

{!this.state.loading && (this.state.articles.map(post =>{
    return (
        <ArticleExtract post={post} key={post.id}/>
    );
}))}

         </React.Fragment>
    )
  }
}
