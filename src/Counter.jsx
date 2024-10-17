import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount); // Increment count
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount); 
        // Decrement count
    }

    return (
        <div style={{border: '2px solid yellow', padding: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
}
