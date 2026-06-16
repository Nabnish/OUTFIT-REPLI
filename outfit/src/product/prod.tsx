import { useParams,useNavigate } from "react-router-dom";
import { Data } from "../data/data"


type Productprops = {
    theme: string;
}

export default function Product({ theme }: Productprops) {

    const { id } = useParams();
    const product = Data.find(p => p.id === id)
    if (!product) {
        return (
            <>
                <div className={`${theme === "#000000" ? "bg-[#000000]" : "bg-[#ECE9E4]"}`}></div>
                <div>Produt not found</div>
            </>
        );
    }

    const navi=useNavigate();

    return (
        <>
            <div className={`${theme === "#000000" ? "bg-[#000000]" : "bg-[#ECE9E4]"} w-fill h-fill m-0 p-0 grid grid-cols-2 gap-70`}>
                <div className="grid gap-278 grid-rows-2 w-[809px] h-[1079px]">

                    <img src={product.images[0]} className="w-[809px] h-[1079px]  "></img>
                    <img src={product.images[1]}></img>
                </div>
                <div className={`${theme === "#FF0000" ? "text-[#FF0000]" : theme === "#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}`}>
                    <button onClick={()=>navi('/')} className="">Return to shop</button>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>

            </div>
        </>
    );
}