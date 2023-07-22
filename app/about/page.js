import styles from './About.module.css'

export default function About() {

    return(

        
        <section className={`${styles.containerAbout}`}>
        
        
        <section>
        <img className={`${styles.imgAbout}`} src="/img/about/about.jpg"></img>
        </section>

        <section className={`${styles.borderLeftAbout}`}></section>

            <section className={`${styles.textAbout}`}>
        <h1 className={`${styles.titleAbout}`}>Sobre o <span className={`${styles.spanAbout}`}>Projeto</span></h1>

        <p className={`${styles.pAbout}`}>“All Pokemon And People Were Born Because <br></br> They Have A Part In The World.”</p>
        </section>
        
        
        
        </section>
        
        

    )

}