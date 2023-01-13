import {useState} from "react";
import {data} from "@/components/Products/Data";
import {ProductText} from "@/components/Products/ProductText";
export const  ProductCard = () => {
    return (
        <>
<div className={"flex flex-col items-center justify-center"}>
<div>
    {data.map((products) => <ProductText product={products}/>)}
</div>

</div>

        </>

    );
}
export default ProductCard;