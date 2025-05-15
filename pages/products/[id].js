export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products?limit=12');
    const data = await res.json();
    const paths = data.products.map((item) => {
        return{
            params: { id:String(item.id) },
        }
    
})
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({params}) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            products:data
        }
    }
}

export default function ProductDetail({products}) {
   
    return(
        <>
        <h1>สินค้าชิ้นที่ : {products.id}</h1>
        <h2>{products.title}</h2>
        </>
    )
}