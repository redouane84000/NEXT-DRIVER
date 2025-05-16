import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const languages = [
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' }
  ];

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDrawer = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-drawer-container" ref={drawerRef}>
      <button 
        className="language-trigger"
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-label="Changer la langue"
      >
        <span className="current-lang">
          {languages.find(lang => lang.code === currentLanguage)?.flag || '🌐'}
        </span>
      </button>

      <div className={`language-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Sélectionner la langue</h3>
          <button className="close-drawer" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
      {isOpen && <div className="drawer-overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default LanguageSelector; 