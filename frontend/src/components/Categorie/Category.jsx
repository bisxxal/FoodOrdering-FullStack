import React, { useState } from 'react'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDIsplay from '../FoodDisplay/FoodDIsplay'

function Category() {
    const [categorie , setCatrgorie] = useState("All")
    
  return (
    <div className='w-full p-7 lg:px-16 pt-20 '>
          <ExploreMenu categorie={categorie} setCatrgorie = {setCatrgorie}/>
        <FoodDIsplay  categorie={categorie}/>
    </div>
  )
}

export default Category