import { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);

  // throws an error
  // console.log(document.getElementById("count-text").innerHTML);

  return (
    <div>
      <div id="count-text" className="mb-5">
        Count: {count}
      </div>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
