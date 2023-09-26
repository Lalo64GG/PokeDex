import { useState,useEffect } from "react";
import Button from "../Atoms/Button";
import Paragraph from "../Atoms/Paragraph"
import Text from "../Atoms/Text";

function Card({ data }) {
  
  return ( 
    <div className=" flex flex-wrap justify-center py-4">
      {data.map( (pokemon) =>(
          <div key={pokemon.id_Pokemon} className="card w-96 bg-sky-500 shadow-xl my-14 mx-10  ">
        
        <figure className="bg-sky-300">      
<img
    src = { pokemon.image_Pokemon }
/>

</figure>
        
      <div className="card-body ">
        <Text children = {  pokemon.name_Pokemon  } clase = { `card-title text-lg uppercase text-center` } />
        <Paragraph children = { `Force :` } span ={ pokemon.weight_Pokemon }  />
        {
          pokemon.stats.map( (e) =>{
              return   <Paragraph children = { `${ e.name } :` } span = { `${ e.puntos }` }  />
          } ) 
        }

        <Paragraph children = { ` Tipo : ` } span = { pokemon.type_Pokemon } />

        <div className="card-actions justify-end ">
        </div>
      </div>
    </div>
        ) )
      }
    </div>
  )
}

export default Card;
