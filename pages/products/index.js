import Head from "next/head"
// https://dummyjson.com/products?limit=12
import Image from "next/image"
import styles from "@/styles/Product.module.css"
import Link from "next/link"
export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    console.log(data)
    return {
        props: {
            products: data.products
        }
    }
}

export default function index({products}) {
    return(
        <>
        <Head>
            <title>สินค้า</title>
            <meta name="keywords" content="CHETTT" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
            
            {products.map(item=>(
                <div key={item.id}>
                    <Link href={`/products/${item.id}`} className={styles.card}>
                    <h2 className={styles.title}>{item.title} | {item.price}</h2>
                    <Image src={item.thumbnail} width={200} height={200} alt={item.title}/>
                    </Link>
                    </div>
            ))}
        </div>
        
        </>
    )
    
}