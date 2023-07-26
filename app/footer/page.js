import styles from './Footer.module.css'
import Link from 'next/link'


export default function Footer() {

    return(

        <>
            <footer className={`text-center text-lg-start ${styles.footerStyle}`}>
 
  <div className="text-center p-3">
    © 2018 Copyright:
    <Link className="text-dark" href="https://pokeapi.co/"> <span className={`${styles.spanFooter}`}>PokeApi</span></Link>
  </div>
 
</footer>
        </>

    )

}