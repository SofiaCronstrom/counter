import { MouseEventHandler, ReactElement, useState } from "react";

export default function Counter(): ReactElement {
  const [count, setCount] = useState<number>(0);


const handleOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
   const target = e.target as HTMLElement;

   if (!target.id){
    return;
   }
   switch (target.id) {
    case "decrement":
       return setCount((c) => c - 1);
    case "increment":
       return setCount((c) => c + 1);
    case "reset":
        return setCount(0);
   }
   console.log(target.id)
};

  return (
    <div className="counter" onClick={handleOnClick}>
      <p>Counter</p>
      <button id='decrement' disabled={count == 0}>
        -
      </button>
      <p>{count}</p>
      <button id="increment">+</button>
      <button id="reset">Reset</button>
    </div>
  );

}
