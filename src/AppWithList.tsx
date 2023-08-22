import React, { FC, useState, KeyboardEvent, useEffect } from "react";
import "./App.css";
import { getData } from "./store";
import Profiler from "./Profiler";

const List: FC<{ list: string[] }> = ({ list }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

let t: number = new Date().getTime();

// Вынесли список в отдельный компонент List.
// Передаем стэйт через пропсы.
const AppWithList: FC = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<string[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getData(10000).then(setList);
  }, [count]);

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!value) return;
    const key = e.key;
    if (key === "Enter") {
      setList((items) => [...items, value]);
      setValue("");
    }
  };

  const naw = new Date().getTime();
  console.log("AppWithList", naw - t);

  return (
    <div className="app">
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((v) => v + 1);
          t = new Date().getTime();
        }}
      >
        Click Me
      </button>
      <Profiler id="List">
        <List list={list} />
      </Profiler>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyDown={handleAdd}
      />
    </div>
  );
};

export default AppWithList;
