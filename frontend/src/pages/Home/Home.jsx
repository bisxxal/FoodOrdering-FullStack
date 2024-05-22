import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDIsplay from '../../components/FoodDisplay/FoodDIsplay'
import Appdowload from '../../components/appdowload/Appdowload'

function Home() {
  const [categorie , setCatrgorie] = useState("All")
  return (
    <div className='w-full p-7 lg:px-16 pt-20 '>
        <Header/>
        <ExploreMenu categorie={categorie} setCatrgorie = {setCatrgorie}/>
        <FoodDIsplay  categorie={categorie}/>
        <Appdowload/>
    </div>
  )
}

export default Home