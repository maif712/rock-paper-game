import {useEffect, useState } from "react"
import { GAME_NAME } from "../constans"


import { playerInitialValue } from "../constans"
import useAiMove from "./useAiMove"


export default function usePlayerMove() {

    const [player, setPlayer] = useState(playerInitialValue)
    const [result, setResult] = useState(false)
    const [runUseEffect, setRunUseEffect] = useState(false)
    const [equal, setEqual] = useState(false)



    const {ai, aiMove, aiWon, handleAiReset, isAiMoveLoading} = useAiMove()


    const handlePlayer = (input) => {
        setPlayer(prev => ({
            ...prev,
            hand: input
        }))

        aiMove()
        setResult(true)
        setRunUseEffect(true)
    }


    const playerWon = () => {
        setPlayer(prev => ({
            ...prev,
            score: prev.score + 1,
            win: true
        }))
    }

    const handlePlayAgain = () => {
        setResult(false)
        setPlayer(prev => ({
            ...prev,
            hand: "",
            win: false
        }))
        handleAiReset()
        setEqual(false)
    }

    const handleWinCheck = () => {
        if (player.hand == GAME_NAME.paper && ai.hand == GAME_NAME.rock) {
            playerWon()
        }
        else if (player.hand == GAME_NAME.rock && ai.hand == GAME_NAME.scissors) {
            playerWon()
        }
        else if (player.hand == GAME_NAME.scissors && ai.hand == GAME_NAME.paper) {
            playerWon()
        }
        else if (player.hand == GAME_NAME.paper && ai.hand == GAME_NAME.paper) {
            setEqual(true)
        }
        else if (player.hand == GAME_NAME.rock && ai.hand == GAME_NAME.rock)
        {
            setEqual(true)
        }
        else if (player.hand == GAME_NAME.scissors && ai.hand == GAME_NAME.scissors)
        {
            setEqual(true)
        }
        else {
            aiWon()
        }
    }

    useEffect(() => {
        if (runUseEffect) {
            handleWinCheck()
            setRunUseEffect(false)
        }
    }, [runUseEffect, player])

    return {
        player, handlePlayer, playerWon, handlePlayAgain, result, ai, isAiMoveLoading, equal
    }
}