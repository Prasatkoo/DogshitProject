
import { Inter } from '@next/font/google'

import Counter from "@/components/Counter";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => setHidden(!hidden)}>
      {hidden ? "Schovat" : "Zobrazit"}
    </button>
    {hidden && <Counter/>}
    </>
  )
}
