import { FC, Profiler as ReactProfiler, ProfilerProps } from "react";

const Profiler: FC<Omit<ProfilerProps, "onRender">> = ({ children, id }) => {
  const handleRender = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
  ) => {
    console.log(
      id,
      phase,
      Math.round(actualDuration),
      Math.round(baseDuration),
    );
  };

  return <ReactProfiler id={id} children={children} onRender={handleRender} />;
};

export default Profiler;
