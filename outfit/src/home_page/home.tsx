import { motion } from "motion/react"

type homeProps={
    theme:string;
}
export default function Home({theme} : homeProps) {
    return(
        <>
            <motion.div className={`${theme==="#000000" ? "bg-[#000000]" : "bg-[#ECE9E4]"} w-screen h-screen mt-0 pt-0 p-5`}>
                <div className={`grid grid-flow-col font-bold font-outfit text-[27rem] tracking-tight ${theme==="#FF0000" ? "text-[#FF0000]" : theme==="#000000" ? "text-[#ECE9E4]" : "text-[#000000]"}  leading-none pt-7`}>
                    <motion.p>O</motion.p>
                    <motion.p>U</motion.p>
                    <motion.p>T</motion.p>
                    <motion.p>F</motion.p>
                    <motion.p>I</motion.p>
                    <motion.p>T</motion.p>
                </div>
                
            </motion.div>
        </>
    );
}