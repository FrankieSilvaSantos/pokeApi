import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={`${styles.containerHome}`}>
      <section className={`${styles.containerTituloHome}`}>
        <h1 className={`${styles.titleHome}`}><span className={`${styles.spanHome}`}>Poke</span>Api <img className={`${styles.imgHome}`} src='/img/logo/pokeball.png'></img></h1>
        

      <section className={`${styles.borderHome}`}></section>
      </section>
    </main>
  )
}
