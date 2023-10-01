import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Linkcreate AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <div className={styles.description}>
          <p>
            Get started on some real shit, just to know how you are doing roday
          </p>
         
        </div>

        <div className={styles.center}>
          
        </div>

       
      </main>
    </>
  )
}
