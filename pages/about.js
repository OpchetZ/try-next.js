
import styles from "@/styles/about.module.css"
import Image from "next/image"
import Head from "next/head"
export default function About(){
    return(
        <>
        <Head>
            <title>เกี่ยวกับเรา</title>
            <meta name="keywords" content="CHETTT" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/ME on PC.jpg" width={500} height={500} />
        </div>
        
        </>


    )
}