import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";


function ThemeToggle(){
    // using useContext through our cuustom hook 

    const {state: {isDark},dispatch } = useTheme()


    // useCallback for memoized event handles. 
    const handleThemeToggle =  useCallback(()=>{
        dispatch({type : "TOGGLE_THEME"});
    },[dispatch])

    

    return <div >
        <button onClick={handleThemeToggle}>Switch to {isDark?"Light":"Dark"}</button>

    </div>
}


export default ThemeToggle;