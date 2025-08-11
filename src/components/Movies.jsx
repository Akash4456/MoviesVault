import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import Banner from './Banner'


function Movies({handleAddtoWatchlist , handleRemoveFromWatchList , watchlist}) {


  const [movies , setMovies] = useState([])
  const [pageNo , setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo===1){
      setPageNo(1)
    }
    else {
      setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dd7cf1143be5223ca65e9cc21a8f4ed6&with_original_language=kn&sort_by=popular.desc&page=${pageNo}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    })

  } , [pageNo])

  return (
    <div>

      

        <div className='text-2xl font-bold text-center p-5 m-5'>
          Popular Kannada Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around'>
          
          {movies.map((movieObj)=>{
            return <MovieCard poster_path = {movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} movieObj={movieObj} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/> 
          })}
          
        </div>

        <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo}/>

    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/person/popular?api_key=dd7cf1143be5223ca65e9cc21a8f4ed6&language=en-US&page=1
// `https://api.themoviedb.org/3/movie/popular?api_key=dd7cf1143be5223ca65e9cc21a8f4ed6&language=en-US&page=2`
