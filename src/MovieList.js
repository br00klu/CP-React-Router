import React, {useEffect, useState} from 'react';
import AddMovieForm from './components/AddMovieForm';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';


function MovieList (){

    const [movies,setMovies]=useState([
          {title:'Avatar',
            description: 'blue people being weird',
            posterURL:'https://m.media-amazon.com/images/I/61NGAgspSHL._AC_SX425_.jpg',
            rating:2,
            id:1,
            trailer:'5PSNL1qE6VY'},
            {title: 'Frozen',
            description: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
            posterURL:'https://m.media-amazon.com/images/I/714arK1ZtCL._AC_SY741_.jpg',
            rating:3,
            id:2,
            trailer:'S1x76DoACB8'},
            {title:'Joy',
            description: 'Joy is the story of the title character, who rose to become founder and matriarch of a powerful family business dynasty.',
            posterURL:'https://static.rogerebert.com/uploads/movie/movie_poster/joy-2015/large_tnpsyUfyK0PZTqbke4JYlSkA3U0.jpg',
            rating:3,
             id:3,
            trailer:'uR-2TiQVY-k'},
            {title:'The Joker',
            description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
            posterURL: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/f67ac277-eae3-4ae0-96e3-3efb2751b573/600_edkfeikxyaegb5i.jpg',
            rating:3,
           id:4,
            trailer:'zAGVQLHvwOY'},

            {title: 'Frozen 2',
            description: 'just like the first but sadder',
            posterURL: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg',
            rating:3,
             id:5,
             trailer:'Zi4LMpSDccc'}
    ])

    const [filMovies,setFilMovies]=useState(movies)   
    
    const addMovie=(title,description,posterURL,rating)=>{ setMovies([
        {title,description,posterURL,rating},
        ...movies
    ])}

    const filterMovie=(textFilter,ratingFilter)=>{ setFilMovies(
        movies.filter(x=>(x.title.includes(textFilter))&&(x.rating>=ratingFilter)))
    }

    useEffect(()=> {setFilMovies(movies)} ,[movies])

return (
    <Router>
        <Route exact path='/movies'>
            <div>
                <AddMovieForm addMovie={addMovie} />
                
                <Filter filterMovie={filterMovie} />
                
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {filMovies.map((x,i)=><div key={i}> <MovieCard Movie={x} /> </div>)}
                </div>
            </div>
        </Route>
        <Route  path='/movies/:movieId' >
          <MovieDetails Movies={filMovies}/>
        </Route>
     </Router>
)}

export default MovieList;