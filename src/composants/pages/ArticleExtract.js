import React from 'react';
import {Link } from 'react-router-dom';

const ArticleExtract = (props)=>(

    <div className="article">
    <h2>{props.post.title}</h2>
    <p>{props.post.body}</p>
    <Link to={`article/${props.post.id}`}>Lire la suite  </Link>
<hr />
</div>

)

export default ArticleExtract;

