import { createContext, useContext, useEffect, useState } from "react";
import usePlayerMove from "./hooks/usePlayerMove";


const AppContext = createContext(null)

export function AppContextProvider({children}) {

    const [isRules, setIsRules] = useState(false)
    const [isShowPlayAgain, setIsShowPlayAgain] = useState(false)



    const {player, handlePlayer, result, handlePlayAgain, ai, isAiMoveLoading, equal} = usePlayerMove()


    const values = {
        player,
        handlePlayer,
        result,
        handlePlayAgain,
        isRules,
        setIsRules,
        ai, 
        isAiMoveLoading,
        isShowPlayAgain,
        setIsShowPlayAgain
    }

    useEffect(() => {
        if(player.win || ai.win || equal)
        {
            setTimeout(() => {
                setIsShowPlayAgain(true)
            }, 400);
        }
    }, [player, ai, equal])

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext

export const useAppContext = () => useContext(AppContext)