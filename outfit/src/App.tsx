import  Home  from './home_page/home';
import NavBar from './nav_bar/nav';
import { useState } from 'react';



export default function App() {
    const [theme, setTheme] = useState<string>("#FF0000");
    
    return(
        <>
            <NavBar theme={theme} setTheme={setTheme}  />
            <Home theme={theme}/>
        
        </>
    );
}