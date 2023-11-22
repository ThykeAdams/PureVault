import React, { FC, useState, useEffect } from 'react';
import NHead from 'next/head';

interface BaseProps {
  children?: React.ReactNode;
  title?: string;
}

const SideBarWrapper: FC<BaseProps> = ({ title, children }) => {
  return <div className="flex">
  <aside className={`w-64 bg-background-secondary h-screen`}>
    
  </aside>
  <main className="flex-1 p-6">
    {children}
  </main>
</div>
};

export default SideBarWrapper;
