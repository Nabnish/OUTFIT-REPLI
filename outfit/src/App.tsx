import Home from './home_page/home';
import NavBar from './nav_bar/nav';
import MetaBalls from './component/MetaBalls.jsx';


import { useState } from 'react';



export default function App() {
    const [theme, setTheme] = useState<string>("#FF0000");

    return (
        <>


            <MetaBalls
                color="#FF0000"
                cursorBallColor="#FF0000"
                cursorBallSize={0.45}
                ballCount={0}
                animationSize={50}
                enableMouseInteraction
                enableTransparency={true}
                hoverSmoothness={0.054}
                clumpFactor={0}
                speed={2}
            />
            <NavBar theme={theme} setTheme={setTheme} />

            <Home theme={theme} />


        </>
    );
}