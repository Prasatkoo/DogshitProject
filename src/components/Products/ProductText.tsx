import {Product} from "@/components/Types/Product";

interface Props {
    product: Product;
}

export const ProductText: React.FC<Props> = ({product}) => {
    return (
        <div className={"flex-initial"}>
        <div className={"text-div bg-gray-300"}>
            <div className={"bg-blue-500 text-white font-bold py-2 px-4 rounded"}>
                <h1>{product.name}</h1>
            </div>
            <div className={"text-code"}>
                <h3>{product.category}</h3>
            </div>
            <div className={"text-description"}>
           <h4>{product.description}</h4>
            </div>
        </div>
   <div>
       <h2 className={"text-red-400"}>
           {product.price}
       </h2>
   </div>
    </div>
    )
}