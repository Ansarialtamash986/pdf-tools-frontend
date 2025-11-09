import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">PDF Tools</Link>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
        <div className={`md:flex md:items-center ${open ? 'block' : 'hidden'}`}>
          <Link to="/" className="block md:inline-block mx-3 my-1 text-gray-800 hover:text-primary">Home</Link>
          <Link to="/merge" className="block md:inline-block mx-3 my-1 text-gray-800 hover:text-primary">Merge</Link>
          <Link to="/split" className="block md:inline-block mx-3 my-1 text-gray-800 hover:text-primary">Split</Link>
          <Link to="/compress" className="block md:inline-block mx-3 my-1 text-gray-800 hover:text-primary">Compress</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
