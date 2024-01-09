import { useState } from "react"
import './Counter.css'

export default function Counter() {
    let [Count, setCount] = useState(0);

    return (
        <div id="counterID">
            <h1 className="counting">{Count}</h1>
            <div>
                <button onClick={() => setCount(Count + 1)}>Incrememt</button>
                <button onClick={() => setCount(Count - 1)}>Decrement</button>
            </div>
        </div>
    )
}