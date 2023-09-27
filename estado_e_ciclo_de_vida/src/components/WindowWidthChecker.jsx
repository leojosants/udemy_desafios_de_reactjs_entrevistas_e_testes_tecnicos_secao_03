import { useState, useEffect } from 'react';

const WindowWidthChecker = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <h3>Largura da tela: {windowWidth}px</h3>
    );
};

export default WindowWidthChecker;