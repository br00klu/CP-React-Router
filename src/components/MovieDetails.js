import React from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';

function MovieDetails ({Movies}){
    const {movieId}=useParams()
    const Movie=Movies.find(x=>x.id==movieId)
    let history = useHistory();
  
return(

    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <button onClick={history.goBack}>Back</button>
        <div style={{fontSize:'40px',marginBottom:'70px'}}>{Movie.title}</div>
        <iframe  src={`https://www.youtube.com/embed/${Movie.trailer}`}
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title={`${Movie.title}'s trailer`}
        />
        <p style={{marginTop:'70px'}}>
            {Movie.description}
        </p>

    </div>
)
}
export default MovieDetails;