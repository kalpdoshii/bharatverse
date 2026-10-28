import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo.jsx';

const links = [['Universe', '#universe'], ['Characters', '#characters'], ['Mythology', '#mythology'], ['Gallery', '#gallery']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner"><Logo />
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
      </nav>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
