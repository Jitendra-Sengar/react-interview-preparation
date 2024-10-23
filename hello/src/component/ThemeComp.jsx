import React from 'react'
import { useTheme } from './ThemeContext'
import '../styles/Theme.css'
const ThemeComp = () => {
    const {isDarkMode}=useTheme()
    const themeClass=isDarkMode? 'dark-theme':'light-theme'
  return (
    <div className={`container ${themeClass}`}>
      <p>This component uses the selected theme</p>
    </div>
  )
}

export default ThemeComp
