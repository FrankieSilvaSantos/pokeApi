import styles from './Header.module.css'
import Link from 'next/link'


export default function Header() {

    return(

        <>
            <nav className={`navbar navbar-expand-lg  ${styles.navStyle}`}>
  <div className="container-fluid">
    <a className={`navbar-brand ${styles.logoStyle}`} href="#"><img className={`${styles.imgHeader}`} src="/img/logo/pokeball.png"></img> PokeApi</a>
    <button className={`navbar-toggler ${styles.togglerStyle}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className={`navbar-toggler-icon ${styles.togglerStyle}`}></span>
    </button>
    <div className={`collapse navbar-collapse ${styles.listPositioning}`} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link  ${styles.linkStyle}`} aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  ${styles.linkStyle}`} href="#">About</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </>

    )

}