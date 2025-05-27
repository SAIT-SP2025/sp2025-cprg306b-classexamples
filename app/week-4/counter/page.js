"use client"

import { useState } from "react";

export default function CounterPage() {

    let [count, setCount] = useState(0);

    const increment = () => {
        let currentCount = count.valueOf();
        if (currentCount <= 9 ) {
            setCount(currentCount + 1);
        }
        // count = count + 1; //this will not work, and is bad practice
    }
    // setCount(count + 1); // never put a state setter directly in the code call
    const resetCounter = () => setCount(0);

    let buttonStyles = "bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 rounded";
    if(count >= 10 ) {
        buttonStyles = "bg-gray-500 text-white px-2 py-1 rounded";
    }

    return(
        <main className="p-4">
            <h1 className="text-2xl">Counter</h1>
            <p>Current Count: {count} </p>
            <button
                onClick={increment}
                className={buttonStyles}
            >Increment</button>
            <button
                onClick={resetCounter}
                className="bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 rounded ml-2"
            >Reset Counter</button>
        </main>
    );
}