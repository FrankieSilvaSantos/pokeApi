
import styles from './Pokemon.module.css'

export default async function Pokemon({ params }) {



 

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then((res) => res.json())
 
  console.log(pokemon)

  return (
   
    <section className={`${styles.containerTheOne}`}>

<div className={` ${styles.containerCard1}`}>
{[pokemon].map((pokemon) => (
<div className={`container mx-auto mt-4 `}>

  <div className={` `}>

   
    <div className={``}>
  

  

    
        <div className={`card ${styles.card}`}>

       <div>
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.pokemon}.png`} className={`card-img-top ${styles.imgCardHome}`}  alt="..."/>
  
  <div className={`card-body ${styles.cardBodyStyle}`}>
   
         
<h5 className={`card-title ${styles.titleCardHome}`}>{params.pokemon}</h5>
<h6 className={`card-subtitle mb-2  ${styles.titleCardHome2}`}>{pokemon.name.toUpperCase()}</h6>



<div className={`${styles.statsPositioning}`}>

<div style={{display:'flex'}}>
<h5 className={`card-subtitle mb-2  ${styles.titleStats1}`}>Abilities:</h5>
{pokemon.abilities.map((ability) => (

<p className={`${styles.pStyleDetails}`}><span className={`${styles.borderAbilities}`}></span>{ability.ability.name.toUpperCase()}<span className={`${styles.borderAbilities}`}></span></p>

))}
</div>



<div style={{display:'flex'}}>
<h5 className={`card-subtitle mb-2  ${styles.titleStats2}`}>Type:</h5>
{pokemon.types.map((type) => (

<p className={`${styles.pStyleDetails2}`} ><span className={`${styles.borderAbilities2}`}></span>{type.type.name.toUpperCase()}<span className={`${styles.borderAbilities2}`}></span></p>
))}
</div>

<div style={{display:'flex'}}>
<h5 className={`card-subtitle mb-2  ${styles.titleStats3}`}>Height:</h5>
{[pokemon].map((height) => (

<p className={`${styles.pStyleDetails3}`}> - {height.height * 10} CM</p>

))}
</div>

<div style={{display:'flex'}}>
<h5 className={`card-subtitle mb-2  ${styles.titleStats4}`}>Weight:</h5>
{[pokemon].map((weight) => (

<p className={`${styles.pStyleDetails4}`}> - {weight.weight/10} KG</p>

))}
</div>


</div>



</div>


<div className={`${styles.StatsPositioning}`}>

</div>

</div> 






</div>
     
  
  
 
 
    </div>  

 
      
      
    
  
  
     
</div>

</div>

 ))}
 </div>
  

 
    </section>
 )
}
