'use client';

import Link from 'next/link';
import { app_list } from '@/Constants/AppsLists';

const Navbar = () => {
  return (
    <aside className="bg-gray-900 text-white flex flex-col min-h-screen max-h-screen overflow-auto">
    <div className="p-6 text-2xl font-semibold border-b border-gray-700">
      My Side Bar
    </div>
    <nav className="flex-1 p-4 space-y-2">      
      {app_list?.map((link) => (
        <Link key={link.path} href={link.path} className="block py-2 px-4 rounded hover:bg-gray-700 transition">{link.name}</Link>
      ))}
    </nav>
    <div className="p-4 text-sm border-t border-gray-700">© 2025 Next Gen App</div>
  </aside>
  );
};

export default Navbar;
