import Image from "next/image";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    
    <>
    <Head>
      <title>หน้าแรก</title>
      <meta name="keywords" content="CHETTT" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
    <h1 className={styles.title}>หน้าแรก</h1>
    <Image src="/ME on PC.jpg" width={300}height={300}/>
    <p>สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์สูรเชษฐ์</p>
    <Link href="/products" className={styles.btn}>สินค้า?</Link>
    </div>
    
    </>
  );
}
