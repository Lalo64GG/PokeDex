import Paragraph from "../Atoms/Paragraph"
import Text from "../Atoms/Text";

function Card({ data, specialColorIndex  }) {
  
  return ( 
    <div className="flex flex-wrap justify-center py-4 ">
      {data.map( (pokemon, index) =>(
          <div key={pokemon.id_Pokemon} className={`mx-10 shadow-xl card w-72 ${
            index < specialColorIndex ? "bg-purple-500" : "bg-sky-500"
          } my-14 `}>
        
        <figure className = { ` ${
            index < specialColorIndex ? "bg-purple-200" : "bg-sky-200"
          }  ` }>      
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

        <div className="justify-end card-actions ">
        </div>
      </div>
    </div>
        ) )
      }
    </div>
  )
}

export default Card;
