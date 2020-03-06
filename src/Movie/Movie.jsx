import * as React from 'react';
import './style.css'
function Movie(props){
    return  <div className="movie-card"> 
        <img src={props.banner}/>
        <label>{props.likes} {props.name}{props.actor}</label>
    </div>
}
export default Movie;