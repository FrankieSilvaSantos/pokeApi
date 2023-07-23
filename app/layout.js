import styles from './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/page'
import Footer from './footer/page'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PokeApi App',
  description: 'NextJs studies app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/logo/pokeApi.ico" sizes="any" />

      {/* BOOTSTRAP */}

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script>

      {/* MDB */}

      
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  rel="stylesheet" crossOrigin='anonymous'
/>

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet" 
/>

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.css"
  rel="stylesheet" 
/>


<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"
  
></script>  

   


      </head>
      <body className={inter.className}>
      
      <header><Header></Header></header>
      
      <main className={`${styles.mainStyle}`}>{children}</main>
      
        <footer className={`${styles.footerStyle}`}><Footer></Footer></footer>
      
      </body>
    </html>
  )
}
