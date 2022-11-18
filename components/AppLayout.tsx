import React from "react";

import Nav from "./Nav";
import Link from "next/link";

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AppLayout;
