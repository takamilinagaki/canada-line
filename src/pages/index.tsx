
import dynamic from "next/dynamic"
import Image from "next/image";
import styles from "../styles/Home.module.css"
import Head from "next/head";

import Logo from "../../public/logo.svg"

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});


export default function Home() {
  return (
    <>
    <Head>
        <title>Canada Line</title>
        <link rel="icon" href="/logo.svg" />
    </Head>
      <main className={styles.main}>
          <div className={styles.logoSection}>
              <Image 
                src={Logo}
                alt="personal Icon"
                width={50}/>
                <h1 style={{
                  fontSize: '30px',
                  fontFamily: 'Barriecito'

                }}>Canada Line Station Tracker</h1>
          </div>
          <DynamicMap />
      </main>
    </>
  )
}
