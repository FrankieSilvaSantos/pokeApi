import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 


export default async function Home() {

  const data = await getData()
  console.log(data)

  return (
    <section>
    <main className={`${styles.containerHome}`}>
      <section className={`${styles.containerTituloHome}`}>
        <h1 className={`${styles.titleHome}`}><span className={`${styles.spanHome}`}>Poke</span>Api <img className={`${styles.imgHome}`} src='/img/logo/pokeball.png'></img></h1>

         
            
      <section className={`${styles.borderHome}`}></section>

      </section>

    

      
    </main>

    {/* <div>


<ul>
{[data].map((pokemon,index) => (
   <div>
  <li key={index}>
 
 <h1>{pokemon.name}</h1>
 <img src={pokemon.sprites.front_default}></img>
{data.abilities.map((skill) => {

 return <h2>{skill.ability.name}</h2>

})}

</li>

</div>
))}
</ul>

</div> */}

  <section>

   

      <ul>
      {[data].map((datos) => (
        <div>
        <li>

        {datos.results.map((nombre) => (

          <h1>{nombre.name}</h1>

        ))}

        </li>
        </div>
 ))}
      </ul>
   

  </section>

    </section>
  )
}
