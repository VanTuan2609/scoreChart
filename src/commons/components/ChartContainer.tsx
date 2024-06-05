import React from "react";

interface ChartContainerProps {
  children: React.ReactNode;
}

const ChartContainer = ({ children }: ChartContainerProps) => {
  return <div className="flex flex-col gap-5 mt-4 md:flex-row">{children}</div>;
};

export default ChartContainer;
