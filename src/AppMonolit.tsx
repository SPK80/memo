import React, { FC, useState, KeyboardEvent } from "react";
import "./App.css";
//Монолит всё в одном компоненте App
const AppMonolit: FC = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleClick = () => {
    setCount((v) => v + 1);
  };

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!value) return;
    const key = e.key;
    if (key === "Enter") {
      setList((items) => [...items, value]);
      setValue("");
    }
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
        onKeyDown={handleAdd}
      />
    </div>
  );
};

export default AppMonolit;
