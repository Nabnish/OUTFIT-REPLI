import { easeInOut, motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { Data } from "../data/data"


type homeProps = {
    theme: string;
}


export default function Home({ theme }: homeProps) {

    const navigate = useNavigate();

    const text = "O U T F I T";
    const parentProps = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 2
            }
        }
    }



    return (
        <>
            <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 1.5, ease: easeInOut }} className={`${theme === "#000000" ? "bg-[#000000]" : "bg-[#ECE9E4]"} w-fill h-fill mt-0 pt-0 p-5`}>
                <div className={`grid grid-flow-col font-bold font-outfit text-[27rem] tracking-tight ${theme === "#FF0000" ? "text-[#FF0000]" : theme === "#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}  leading-none pt-7`}>
                    <div>
                        <motion.p variants={parentProps} initial="hidden" animate="show">
                            {text.split(" ").map((char, index) => (
                                <span key={index}  >

                                    {char}
                                </span>

                            ))}
                        </motion.p>
                    </div>
                </div>
                <motion.div className={`w-full h-2    ${theme === "#FF0000" ? "bg-[#FF0000]" : theme === "#000000" ? "bg-[#ECE9E4]" : "bg-[#000000]"} `} />
                <motion.div className={`grid font-outfit font-medium gap-70 grid-flow-col pt-8 ${theme === "#FF0000" ? "text-[#FF0000]" : theme === "#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}`}>
                    <div className="pr-10">OUTFIT</div>
                    <div className="col-span-2 mr-10">
                        WHY
                        <p className=" tracking-tighter pt-5">Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.</p>
                    </div>
                    <div className="grid  text-nowrap -mr-40 ">
                        <a href="#">Visit ++ website</a>
                        <a href="#">Shipping & Returns</a>
                    </div>
                    <div className="pl-10 text-nowrap mr-5">© 2026</div>
                </motion.div>
                <motion.div className="grid grid-cols-4 gap-8 pt-10">
                    {Data.slice(0, 4).map((Product) => (
                        <button key={Product.id} onClick={() => navigate(`/product/${Product.id}`)} className="flex flex-col items-start gap-4">
                            <img src={Product.images[0]} className="w-85 h-113.5 object-cover " />
                            <div className={`grid grid-cols-2 w-85 font-outfit font-medium text-[1.20rem] ${theme === "#FF0000" ? "text-[#FF0000]" : theme === "#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}`}>
                                <p className="justify-self-start">{Product.name}</p>
                                <p className="justify-self-end">{Product.price}</p>
                            </div>
                        </button>
                    ))}
                </motion.div>

            </motion.div>
        </>
    );
}