import Home from './home_page/home';
import NavBar from './nav_bar/nav';
import MetaBalls from './component/MetaBalls';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import Product from './product/prod';



export default function App() {
    const [theme, setTheme] = useState<string>("#FF0000");
    
    const [label, setLabel] = useState({ visible: false, x: 0, y: 0 });

    return (
        <>

            <BrowserRouter>

                <MetaBalls
                    color="#FF0000"
                    cursorBallColor="#FF0000"
                    cursorBallSize={0.45}
                    hoverBallSize={4}
                    hoverText="View More"
                    label={label}
                    setLabel={setLabel}
                    ballCount={0}
                    animationSize={50}
                    enableMouseInteraction
                    enableTransparency={true}
                    hoverSmoothness={0.1}
                    clumpFactor={0}
                    speed={0.3}
                />
                <NavBar theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path='/' element={<Home theme={theme} setLabel={setLabel} />}></Route>
                    <Route path='/product/:id' element={<Product theme={theme} />}></Route>
                </Routes >
            </BrowserRouter>

        </>
    );
}