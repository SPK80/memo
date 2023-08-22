import React, { FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setCount((v) => v + 1);
  };

  const handleAdd = () => {
    if (value === "") return;
    setList((items) => [...items, value]);
    setValue("");
  };

  console.log("App", count);
  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={handleClick}>Click Me</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;
