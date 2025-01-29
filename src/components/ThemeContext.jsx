/* eslint-disable react/prop-types */
import React,{createContext,useState} from 'react'

 const Theme=createContext()

const ThemeContext = ({children}) => {
    const [theme, setTheme] = React.useState(true)
  
  


    function toggleTheme(){
      setTheme(prev=>{return !prev})
    }


  return (
  <Theme.Provider value={{theme,toggleTheme}}>
    {children}
  </Theme.Provider>
  )
}


export default ThemeContext
