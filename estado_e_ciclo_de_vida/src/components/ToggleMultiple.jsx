import { useState } from "react";

const ToggleMultiple = () => {
    const [isOn, setIsOn] = useState(true);
    const [count, setCount] = useState(0);

    function handleClick() {
        setIsOn(!isOn);
        setCount(count + 1);
     }

    return (
        <div>
            <button onClick={handleClick}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            
            <p>Quantidade de cliques: {count}</p>
            
            {/* <button onClick={() => setCount(count + 1)}>Clique aqui!</button> */}
        </div>
    );
};

export default ToggleMultiple;