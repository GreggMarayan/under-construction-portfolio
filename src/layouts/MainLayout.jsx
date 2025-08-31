import React from 'react';
import BubbleMenu from '../blocks/Components/BubbleMenu/BubbleMenu';
import { useTheme } from '../contexts/ThemeContext';

const MainLayout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <BubbleMenu
        logo={<span style={{ fontWeight: 1000 }}>Gregg.Dev</span>}
        onThemeToggle={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
