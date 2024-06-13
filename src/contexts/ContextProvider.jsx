import React, {createContext, useContext, useState} from 'react';

const stateContext = createContext();

const initialState = {
  userProfile: false,
  // notification: false
}

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true) //Fpr Sidebar
  const [isClicked, setIsClicked] = useState(initialState) //For user Profile
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true
    })
  }

  return(
    <stateContext.Provider 
      value = {{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}
    >
      {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext);