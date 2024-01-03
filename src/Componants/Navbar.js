import React, { useState } from 'react';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const links = [
    { text: 'Home', icon: 'home-outline' },
    { text: 'skill', icon: 'person-outline' },
    { text: 'project', icon: 'chatbubble-outline' },
    { text: 'experience', icon: 'camera-outline' },
    { text: 'contact', icon: 'settings-outline' },
  ];

  return (
    <nav className='navbar'>
      <div className="navigation">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={`list ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleLinkClick(index)}
            >
              <a href={`#${link.text.toLowerCase()}`}>
                <span className="icon">
                  <ion-icon name={link.icon}></ion-icon>
                </span>
                <span className="text">{link.text}</span>
              </a>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
