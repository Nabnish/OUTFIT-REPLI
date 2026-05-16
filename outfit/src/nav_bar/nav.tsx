import {motion} from "motion/react";

export default function NavBar(){
    return(
        <>
            <motion.div className="flex flex-row absolute opacity-100 w-screen h-10vh">
                <div>++</div>
                <a>shop</a>
                <a>bag</a>
                <button className="rounded-full w-5 h-5 bg-[#000000]"></button>
                <button className="rounded-full w-5 h-5 bg-[#ECE9E4] border-2"></button>
                <button className="rounded-full w-5 h-5 bg-[#FF0000]"></button>
            </motion.div>
        </>
    );
}