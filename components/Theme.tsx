import { useTheme } from 'next-themes';
import React from 'react'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button 
        className='text-white dark:bg-black-200 bg-black-100 p-3 rounded-full ml-auto'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
        Toggle Theme
    </button>
  )
}

export default ToggleTheme
