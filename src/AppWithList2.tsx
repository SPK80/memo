import React, { FC, KeyboardEvent, useState } from "react";
import "./App.css";

const List: FC = () => {
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!value) return;
    const key = e.key;
    if (key === "Enter") {
      setList((items) => [...items, value]);
      setValue("");
    }
  };

  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleAdd}
      />
    </>
  );
};

// Перенесли внутрь List стэйт и input

const AppWithList2: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((v) => v + 1);
  };

  console.log("App", count);

  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={handleClick}>Click Me</button>
      <List />
    </div>
  );
};

export default AppWithList2;
