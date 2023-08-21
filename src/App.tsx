import React, { FC, memo, useCallback, useEffect, useState } from "react";
import "./App.css";
import Value from "./Value";

const MemoValue = memo(Value);

const App: FC = () => {
  const [value, setValue] = useState(0);
  const [childValue1, setChildValue1] = useState(0);
  const [childValue2, setChildValue2] = useState(0);

  // useEffect(() => {
  //   const t = setInterval(() => {
  //     setValue((v) => v + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(t);
  //   };
  // }, []);

  const handleClick = () => {
    setValue((v) => v + 1);
  };

  const memorizedHandler = useCallback(() => setChildValue2((v) => v + 1), []);

  console.log("App", value);
  return (
    <div className="app">
      <div>{value}</div>
      <button onClick={handleClick}>Click Me</button>
      <div>
        Usual
        <Value
          className="parent"
          value={childValue1}
          onClick={() => setChildValue1((v) => v + 1)}
        />
      </div>
      <div>
        Memorized
        <MemoValue
          className="parent"
          value={childValue2}
          onClick={memorizedHandler}
        />
      </div>
    </div>
  );
};

export default App;
