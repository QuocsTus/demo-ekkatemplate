import React from 'react';
import { TopHeader } from './TopHeader';
import { BodyHeader } from './BodyHeader';
import { BottomHeader } from './BottomHeader';

export const Header: React.FC = () => {
  return (
    <header className="top-0 z-40 bg-white">
      <TopHeader />
      <BodyHeader />
      <BottomHeader />
    </header>
  );
};