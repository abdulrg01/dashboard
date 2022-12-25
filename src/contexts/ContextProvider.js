import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  Notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveManu] = useState(true);

    return (
        <StateContext.Provider
           value={{ activeMenu, setActiveManu }}
        >
         {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);