import { useState } from "react";

const CartWidget = () => {
    const [ contador, setContador] = useState(1);

    const aumentar = () => {
    if (contador < 10){
        setContador( contador + 1)
    }
    }

    return (
        <div className="contador">
            <p>contador:{contador}</p>
            <button onClick={aumentar}>+</button>
        </div>
    );
};
export default CartWidget