import { motion } from "motion/react";
import { useState } from "react";

export default function NavBar() {
    const [theme, setTheme] = useState("#FF0000");
    function handleSubmit(theme: string) {
        setTheme(theme);
    }

   

    return (
        <>
            <motion.div className="font-outfit text-3xl font-black grid grid-flow-col gap-2 place-content-between   absolute opacity-100 w-screen h-[10vh] p-5">
                <div className="text-6xl font-[1200] tracking-[-0.12em]  " style={{ color: theme }}>++</div>
                <a className="font-normal place-self-center pl-235 " style={{ color: theme }} href="#">Shop</a>
                <a className="font-normal  place-self-center" style={{ color: theme }} href="#">Bag</a>
                <div className="grid grid-flow-col p-5  gap-1">
                    <button className={`rounded-full     w-5 h-5 bg-[#000000] border-1 ${ theme==="#000000" ? 'border-[#ECE9E4]' : "border-[#000000]" }`} onClick={() => handleSubmit("#000000")}></button>
                    <button className={`rounded-full w-5 h-5 bg-[#ECE9E4] border-1 ${ theme==="#000000" ? 'border-[#ECE9E4]' : "border-[#000000]" }`} onClick={() => handleSubmit("#ECE9E4")}></button>
                    <button className="rounded-full w-5 h-5 bg-[#FF0000] border-1 border-[#FF0000]" onClick={() => handleSubmit("#FF0000")}></button>
                </div>
            </motion.div>
        </>
    );
}