import React, { FC, useState, KeyboardEvent } from "react";
import "./App.css";

const List: FC<{ list: string[] }> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

const App: FC = () => {
  const [count, setCount] = useState(0);
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

  console.log("App", count);

  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={() => setCount((v) => v + 1)}>Click Me</button>
      <List list={list} />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleAdd}
      />
    </div>
  );
};

export default App;
