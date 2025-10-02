import { useState, createContext } from 'react';

const ModeContext = createContext();

export default ModeContext;

export const ModeProvider = ({children}) => {

    const [mode, setMode] = useState("light")
    const handleModeClick = () => {
        (setMode(mode === "light" ? "dark" : "light"))
    }

    return <ModeContext.Provider  value = {{mode, handleModeClick}}> 
        {children}
    </ModeContext.Provider>
}