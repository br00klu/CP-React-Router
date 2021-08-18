import React,{useEffect, useState} from 'react';
import ReactStars from "react-rating-stars-component";

function Filter({filterMovie}){
    
    const [textFilter,setTextFilter]=useState("")
    const [ratingFilter,setRatingFilter]=useState(0)

    function handleTextFilter(e){
        setTextFilter(e.target.value)
    }

    function handleRatingFilter(e){
        setRatingFilter(e)

    }
   /* useEffect(() => {
        console.log(textFilter)   ;     
        filterMovie(textFilter,ratingFilter)
    }, [textFilter,filterMovie])*/

    
return (
    <div style={{backgroundColor:'lightgrey',marginTop:'10px',marginBottom:'18px', display:'flex', flexWrap:'wrap'}} >
        <span>Filter: </span>
        <input 
            type='text'  
            value={textFilter} 
            onChange={(e)=>{
                handleTextFilter(e)
                filterMovie(e.target.value,ratingFilter)
                }
            }
        />
        {/*<button onClick={()=>filterMovie(textFilter)}>Search</button>*/}
        
        <ReactStars 
                edit={true} 
                value={ratingFilter} 
                isHalf={false} 
                size={30} 
                onChange={(e)=>{
                    handleRatingFilter(e);
                    filterMovie(textFilter,e)
                }
            }
        />
    </div>
)
}
export default Filter;