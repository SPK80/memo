import React, { FC, useRef, useState, VFC } from "react";
import "./App.css";

const Counter: VFC = () => {
  const [count, setCount] = useState(0);
  console.log("Counter", count);
  return (
    <div className="counter">
      Counter: {count}
      <button onClick={() => setCount((v) => v + 1)}>Click Me</button>
    </div>
  );
};

const Wrapper: FC<{ isReset: boolean }> = ({ children, isReset }) => {
  const [count, setCount] = useState(0);
  if (isReset) {
    setCount(0);
  }
  console.log("Wrapper", count, isReset);
  return (
    <div className="wrapper">
      Wrapper: {count}
      <button onClick={() => setCount((v) => v + 1)}>Click Me</button>
      {children}
    </div>
  );
};

const AppWithoutMemo: FC = () => {
  // const [isReset, setIsReset] = useState(false);
  const isReset = useRef(false);
  if (isReset.current) {
    isReset.current = false;
  }
  console.log("App", isReset);
  return (
    <div className="app">
      <button onClick={() => (isReset.current = true)}>Reset</button>
      <Wrapper isReset={isReset.current}>
        <Counter />
      </Wrapper>
    </div>
  );
};

export default AppWithoutMemo;
