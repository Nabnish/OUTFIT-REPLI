import { motion } from "motion/react";



export default function NavBar({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
    function handleSubmit(theme: string) {
        setTheme(theme);
    }

   

    return (
        <>
            <motion.div initial={{y:-100, opacity:0}} animate={{y:0, opacity:100}} transition={{delay:1.5, duration:0.5}} className={`font-outfit text-3xl font-black grid grid-flow-col gap-2 place-content-between fixed opacity-100 w-screen h-[10vh] p-5 ${theme==="#FF0000" ? "text-[#FF0000]" : theme==="#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}`}>
                <a className={`text-6xl font-[1200] tracking-[-0.12em] $`} href="#" >++</a>
                <a className={`font-normal place-self-center pl-235 tracking-tighter underline `} href="#">Shop</a>
                <a className={`font-normal  place-self-center tracking-tighter`}  href="#">Bag</a>
                <div className="grid grid-flow-col p-5  gap-1">
                    <button className={`rounded-full     w-5 h-5 bg-[#000000] border ${ theme==="#000000" ? 'border-[#ECE9E4]' : "border-[#000000]" }`} onClick={() => handleSubmit("#000000")}></button>
                    <button className={`rounded-full w-5 h-5 bg-[#ECE9E4] border ${ theme==="#000000" ? 'border-[#ECE9E4]' : "border-[#000000]" }`} onClick={() => handleSubmit("#ECE9E4")}></button>
                    <button className="rounded-full w-5 h-5 bg-[#FF0000] border border-[#FF0000]" onClick={() => handleSubmit("#FF0000")}></button>
                </div>
            </motion.div>
        </>
    );
}