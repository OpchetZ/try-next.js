import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return(
        <nav>
            <div className="logo">
                <Link href="/">
                <Image src="/ME on PC.jpg" width={50}height={50}/>
                </Link>
                </div>
            <Link href="/">หน้าแรก</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
            <Link href="/products">สินค้า</Link>
        </nav>
    )
    
}