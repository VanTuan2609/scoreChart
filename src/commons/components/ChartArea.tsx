import React from "react";

interface ChartAreaProps {
  children: React.ReactNode;
}

const ChartArea = ({ children }: ChartAreaProps) => {
  return (
    <div className="flex flex-1 ml-10  max-h-[550px] justify-center">
      {children}
    </div>
  );
};

export default ChartArea;
