import React from 'react';

export default function Header({ activeSection, onNavClick }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }, // Included Certifications
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-[#0f0f0f] shadow-md py-3 flex justify-center gap-8 z-50">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onNavClick(id)}
          className={`text-gray-800 dark:text-white hover:underline focus:outline-none ${
            activeSection === id ? 'font-bold underline' : ''
          }`}
          aria-current={activeSection === id ? 'page' : undefined}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
