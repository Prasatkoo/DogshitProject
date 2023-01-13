import {useState} from "react";


interface Counter {
    count: number;

}

export const  Counter = () => {
    const [counter, setCounter] = useState<Counter>({count: 0});


    return (
        <div className={"text-div mx-auto pt-4"}>
            <p className={""}>{counter.count}</p>
            <button onClick={() => setCounter({count: counter.count + 1})} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Přidat</button>
            <button onClick={() => setCounter({count: counter.count - 1})} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Odebrat</button>
        </div>
    );
}
export default Counter;