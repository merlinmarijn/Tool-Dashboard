import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { ToolPage } from './pages/ToolPage';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tools/:id" element={<ToolPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}