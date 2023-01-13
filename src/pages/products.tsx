
import { Inter } from '@next/font/google'

import Counter from "@/components/Counter";
import ProductCard from "@/components/Products/ProductCard";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <ProductCard/>
        </>
    )
}