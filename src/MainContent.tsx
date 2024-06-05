import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  return <div className="bg-[black] flex-grow overflow-auto">{children}</div>;
};

export default MainContent;
