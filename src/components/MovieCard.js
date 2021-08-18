import React from 'react';
import ReactStars from "react-rating-stars-component";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

function MovieCard ({Movie}){
    
    return (
        <Card style={{ width: '330px', height:'800px'}}>
            <Card.Img variant="top" src={Movie.posterURL} alt='movie poster' height='450px' />
            <Card.Body>
                <Card.Title>{Movie.title}</Card.Title>
                <Card.Text>{Movie.description}</Card.Text>
                <Link to={`/movies/${Movie.id}`}>
                    See Details
                </Link>
                <ReactStars 
                edit={false} 
                value={Movie.rating} 
                isHalf={true} 
                size={30} 
                />
                
            </Card.Body>
        </Card>)
        {/* <ul style={{border:'solid black 4px', listStyle:'none'}}>
            <li>
                <span>title: </span>
                {Movie.title}
            </li> 
            <li>
                <span>description: </span>
                 {Movie.description}
            </li>
            <li style={{listStyle:'none'}}>
                <img src={Movie.posterURL} alt='movie poster'/>
            </li>
            <li>
                <ReactStars 
                edit={false} 
                value={Movie.rating} 
                isHalf={true} 
                size={30} 
                />
            </li>
        
        </ul> */}
    
}
export default MovieCard;