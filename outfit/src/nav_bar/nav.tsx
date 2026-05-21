import {motion} from "motion/react";
import { useState } from "react";

export default function NavBar(){
    const [theme,setTheme]= useState("#FF0000");
    function handleSubmit(theme : string){
        setTheme(theme);
    }
    
    return(
        <>
            <motion.div className="font-outfit text-4xl font-black flex flex-row absolute opacity-100 w-screen h-10vh">
                <div className="text-6xl font-[1200]" style={{color : theme}}>++</div>
                <a className="font-semibold" style={{color : theme}}>shop</a>
                <a className="font-semibold" style={{color : theme}}>bag</a>
                <button className="rounded-full w-5 h-5 bg-[#000000]" onClick={() => handleSubmit("#000000")}></button>
                <button className="rounded-full w-5 h-5 bg-[#ECE9E4] border-2" onClick={() => handleSubmit("#ECE9E4")}></button>
                <button className="rounded-full w-5 h-5 bg-[#FF0000]" onClick={() => handleSubmit("#FF0000")}></button>
            </motion.div>
        </>
    );
}