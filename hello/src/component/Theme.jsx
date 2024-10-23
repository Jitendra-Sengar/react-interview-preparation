import React from 'react'
import { useTheme } from './ThemeContext'

const Theme = () => {

    const {isDarkMode,toggleTheme}=useTheme()
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
        Dark mode
      </label>
    </div>
  )
}

export default Theme
