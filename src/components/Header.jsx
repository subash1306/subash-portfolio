import React, { useState } from 'react';

const Header = ({ activeSection, onNavClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavClick(id);
    setIsMobileMenuOpen(false); // Close menu on mobile after click
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Subash J.</div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link ${
                    activeSection === id ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick(id)}
                  type="button"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          <ul className="nav-list-mobile">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`nav-link-mobile ${
                    activeSection === id ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick(id)}
                  type="button"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
