
import React from 'react';

const NavBar = () => {
  const links = ['home', 'about', 'projects'];
  return (
    <div className="navbar">
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavBar;

