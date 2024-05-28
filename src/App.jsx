// omdb_api="http://www.omdbapi.com/?i=tt3896198&apikey=d460d370"
import React from "react"
import { Routes,Route} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (

    <div className="">
        <Header/>
       <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/movie/:omdbID" Component={MovieDetail} />
        <Route path="*" Component={PageNotFound}/>
       </Routes>
       <Footer/>
        
    </div>

  )
}


export default App
