import React, { FC } from "react";

interface IProps {
  className: string;
  value: number;
  onClick: () => void;
}

const Value: FC<IProps> = ({ className, value, onClick }) => {
  console.log("Value", value);
  return (
    <div className={className}>
      {value}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Value;
