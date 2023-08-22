import React, { FC, memo, useCallback, useState } from "react";
import "./App.css";

const Counter: FC<{ value: number; onReset?: () => void }> = memo(
  ({ value, onReset }) => {
    console.log("Counter", value);
    return (
      <div>
        {value}
        {onReset && <button onClick={onReset}>reset</button>}
      </div>
    );
  },
);

const AppWithMemo: FC = () => {
  const [count, setCount] = useState(0);
  const reset = useCallback(() => setCount(0), []);

  console.log("App");
  return (
    <div className="app">
      <Counter value={count} onReset={reset} />
      <Counter value={999} onReset={reset} />
      <button onClick={() => setCount((v) => v + 1)}>Click Me</button>
    </div>
  );
};

export default AppWithMemo;
