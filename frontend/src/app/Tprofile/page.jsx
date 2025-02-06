'use client';

import { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiFileText, FiPackage, FiTrendingUp, FiLogOut } from 'react-icons/fi';

export default function Dashboard() {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome /> },
    { name: 'Products', icon: <FiPackage /> },
    { name: 'Analytics', icon: <FiTrendingUp /> },
    { name: 'Settings', icon: <FiSettings /> },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="hidden md:flex md:w-64 flex-col bg-gray-800 p-5">
        <div className="flex items-center pb-6 border-b border-gray-700">
          <img className="w-8 h-8" src="/images/a.png" alt="Logo" />
          <span className="ml-3 text-lg font-semibold">Dashboard</span>
        </div>
        <nav className="mt-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center w-full px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                active === item.name ? 'bg-indigo-600' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActive(item.name)}
            >
              <span className="mr-4 text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        <div className="mt-auto">
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-700 rounded-lg">
            <FiLogOut className="mr-3 text-lg" /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold">{active}</h1>
        <div className="mt-4"></div>
      </main>
    </div>
  );
}
