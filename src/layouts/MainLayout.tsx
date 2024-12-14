import React from 'react';
import { TopBar } from '../components/navigation/TopBar';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Breadcrumbs />
      {children}
    </div>
  );
}