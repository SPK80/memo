import React, { FC, useState } from "react";
import "./App.css";

const Child: FC = () => {
  console.log("Child");
  return <div>child</div>;
};

const Parent: FC = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("Parent");
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((v) => v + 1)}>Click Me</button>
      {children}
    </>
  );
};

const AppWithChildren: FC = () => {
  console.log("App");
  return (
    <div className="app">
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default AppWithChildren;
