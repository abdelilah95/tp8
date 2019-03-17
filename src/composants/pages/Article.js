import React, { Component } from 'react'
import axios from 'axios';
import Comment from '../Template/Comment';


export default class Article extends Component {
constructor(props){
    super(props);
}

state={
    articleId:this.props.articleId,
    loading:true,
    loadingCon:true,
    article:null,
    commentaires:[]
}

getArticle=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.articleId)
    .then(response=>{
        this.setState({article:response.data,loading:false})
    });
}
getCommentaires=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/'+this.state.articleId)
    .then(response=>{
        this.setState({commentaires:response.data,loadingCon:false})
    });
}
componentDidMount(){
    this.getArticle();
}


  render() {
    return (
<React.Fragment>
<h1>Liste des articles</h1>
{this.state.loading &&
<h2>chargeent en cours...</h2>
}
        {!this.state.loading &&(
      <div className="article">
        < h1> {this.state.article.title}</ h1 >
        < p> {this.state.body}</ p >
        < hr />
        <h2 >commentaires</h2 >


        {
            this.state.commentaires.map(comment=>(
            <Comment comment={comment} key={comment.id} />
            ))
        }
      </div>
    )
    
}
}