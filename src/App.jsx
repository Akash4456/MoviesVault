import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {

  let[watchlist , setWatchList] = useState([])

  let handleAddtoWatchlist = (movieObj)=>{
    let newWatchList = [...watchlist , movieObj]
    console.log(newWatchList)
    localStorage.setItem('moviesVault' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)

  }

  let handleRemoveFromWatchList = (movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesVault' , JSON.stringify(filteredWatchList))
    console.log(filteredWatchList)
    setWatchList(filteredWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesVault')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<> <Banner/> <Movies handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/> </>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


