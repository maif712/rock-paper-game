
import { useEffect, useState } from "react"
import { aiInitialValue } from "../constans"
import { gameData } from "../constans"

export default function useAiMove() {

    const [ai, setAi] = useState(aiInitialValue)
    const [isAiMoveLoading, setisAiMoveLoading] = useState(false)

    const aiMove = () => {
        const rndNum = Math.floor(Math.random() * gameData.length)
        setAi(prev => ({
            ...prev,
            hand: gameData[rndNum]
        }))
        setisAiMoveLoading(true)
    }

    const aiWon = () => {
        setAi(prev => ({
            ...prev,
            win: true
        }))
    }

    const handleAiReset = () => {
        setAi(aiInitialValue)
    }

    useEffect(() => {
        if(isAiMoveLoading)
        {
            setTimeout(() => {
                setisAiMoveLoading(false)
                console.log("isAiMoveLoading false")
            }, 400);
        }
    }, [isAiMoveLoading])

    return {ai, aiMove, aiWon, handleAiReset, isAiMoveLoading}
}