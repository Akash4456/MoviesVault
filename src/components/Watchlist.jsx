import React, { useEffect, useState } from 'react'
import genres from '../Utility/genre'

function Watchlist({watchlist , setWatchList , handleRemoveFromWatchList}) {

  const [search , setSearch] = useState('')
  const [genreList , setGenreList] = useState(['All Genres'])
  const [currentGenre , setCurrentGenre] =useState('All Genres')

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  let handleFilter = (genre)=>{
    setCurrentGenre(genre)
  }

  let sortDecreasing = ()=>{
    let sorted = watchlist.sort((movieA , movieB )=> {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sorted])
  }


  let sortIncreasing = ()=>{
    let sorted =watchlist.sort((movieA , movieB )=> {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sorted])
  }
  let sortDecreasingRating = ()=>{
    let sorted = watchlist.sort((movieA , movieB )=> {
      return movieA.popularity - movieB.popularity
    })
    setWatchList([...sorted])
  }


  let sortIncreasingRating = ()=>{
    let sorted =watchlist.sort((movieA , movieB )=> {
      return movieB.popularity - movieA.popularity
    })
    setWatchList([...sorted])
  }

  useEffect(() => {
  let temp = watchlist.map(movieObj => {
    return genres[movieObj.genre_ids[0]]; 
  });
  temp = new Set(temp)
  setGenreList(['All Genres', ...temp]);
  console.log(temp);
  }, [watchlist]);


  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre) => {
        return <div onClick={()=>handleFilter(genre)} className={ currentGenre==genre? 'flex justify-center items-center bg-blue-400 rounded-xl text-white font-bold h-[3rem] w-[9rem] mx-2 hover:cursor-pointer' : 'flex justify-center items-center bg-gray-400 rounded-xl text-white font-bold h-[3rem] w-[9rem] mx-2 hover:cursor-pointer'}>
          {genre}
        </div>
      })}

      
      

    </div>

    <div className='flex justify-center pt-8'>
        <input onChange={handleSearch} value={search} type='text' className=' h-[3rem] w-[22rem] bg-gray-200 outline-none px-20' placeholder='Search Movies'/>
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-gray-800 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th >Name</th>

            <th>
              <div className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2 hover:cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2 hover:cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div>
              </div>
            </th>

            <th className='flex justify-center'>
              <div onClick={sortIncreasingRating} className='p-2 hover:cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Popularity</div>
              <div onClick={sortDecreasingRating} className='p-2 hover:cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody >

          {watchlist.filter((movieObj)=>{
            if(currentGenre == 'All Genres'){
              return true
            }else{
              return genres[movieObj.genre_ids[0]]==currentGenre
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return( 
            <tr className='border-b-2'>
            <td className='flex items-center px-6 py-6'>
              <img className='h-[6rem] w-[6rem]' src={`https://image.tmdb.org/t/p/w500${movieObj.poster_path}`}/>
              <div className='mx-10'>{movieObj.title}</div>
            </td>

            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>
              {genres[movieObj.genre_ids?.[0]] || "Unknown"}
            </td>

            <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-800 hover:cursor-pointer'>
              Delete
            </td>
          </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Watchlist