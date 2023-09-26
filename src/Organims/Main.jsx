import React, { useEffect, useState } from 'react'
import Card from '../Molecules/Card'
import { GetRandomPokemon } from '../Data/GetPokemon'
import Button from '../Atoms/Button'

const Main = () => {

  const handleRefresh = () => {
    window.location.reload();
  };

  const [data, setData] = useState([])

  useEffect( () =>{

    const consumoAPI = async () =>{
      try {
        const api = await GetRandomPokemon()
        setData(api)
      }

      catch( err ) {
        console.error('Error', err);
      }

    }

    consumoAPI()

  }, [])



  return (
    <div> 
        <Card
          data = { data }
        />

        <div className = ' flex justify-center items-center mb-10 '>
          <Button clase = { ' bg-green-500 p-3 text-white rounded-md text-2xl' } children = { 'Refrescar' }  evento={handleRefresh}/>
        </div>
       

    </div>
  )
}

export default Main