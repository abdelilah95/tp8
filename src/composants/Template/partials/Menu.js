import React from 'react'
import {Link} from 'react-router-dom'

const Menu =(props) =>(
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/a-propos-de-nous">A propos nous</Link>
        </li>
        <li>
            <Link to="/articles">Liste des articles</Link>
        </li>
    </ul>
)
export default Menu;