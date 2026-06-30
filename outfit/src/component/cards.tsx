import { useNavigate } from "react-router-dom"
import { easeIn, motion } from "motion/react"

import { Data } from "../data/data"
import { useState, type Dispatch, type SetStateAction } from "react";

type LabelState = {
    visible: boolean;
    x: number;
    y: number;
};

type cardsProps = {
    theme: string;
    setLabel: Dispatch<SetStateAction<LabelState>>;
}

export default function Cards({ theme, setLabel }: cardsProps) {
    const navigate = useNavigate();
    const [ishovered, setIshovered] = useState<string | null>(null);
    return (
        <>
            {Data.slice(0, 4).map((Product) => (
                <button
                    key={Product.id}
                    onMouseEnter={() => { setIshovered(Product.id) }}
                    onMouseLeave={() => { setIshovered(null) }}
                    onClick={() => {
                        setLabel((l) => ({ ...l, visible: false }));
                        navigate(`/product/${Product.id}`);
                    }}
                    data-cursor-hover
                    className="flex flex-col items-start gap-4"
                >
                    <div className="relative overflow-hidden w-85 h-113.5">
                        <motion.img
                            src={Product.images[1]}
                            className="absolute inset-0 w-full h-full object-cover z-10"
                            animate={{ x: ishovered === Product.id ? "0%" : "-100%" }}
                            transition={{ duration: 0.5, ease: easeIn, type: "spring", stiffness: 300, damping: 50 }}
                        />
                        <motion.img src={Product.images[0]} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className={`grid grid-cols-2 w-85 font-outfit font-medium text-[1.20rem] ${theme === "#FF0000" ? "text-[#FF0000]" : theme === "#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}`}>
                        <p className="justify-self-start">{Product.name}</p>
                        <p className="justify-self-end">{Product.price}</p>
                    </div>
                </button>
            ))}
        </>
    );
}