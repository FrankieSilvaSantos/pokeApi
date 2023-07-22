import styles from './Footer.module.css'
import Link from 'next/link'


export default function Footer() {

    return(

        <>
            <footer className={`text-center text-lg-start ${styles.footerStyle}`}>
 
  <div className="text-center p-3">
    © 2020 Copyright:
    <Link className="text-dark" href="https://github.com/FrankieSilvaSantos"> <span className={`${styles.spanFooter}`}>PokeApi</span></Link>
  </div>
 
</footer>
        </>

    )

}