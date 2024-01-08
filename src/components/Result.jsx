import { useAppContext } from "../AppContext"
import { GAME_NAME } from "../constans"

export default function Result() {

    const { handlePlayAgain, player, ai, isAiMoveLoading, isShowPlayAgain, setIsShowPlayAgain } = useAppContext()

    const playerWinShadowClass = {
        paper: player.win && player.hand == GAME_NAME.paper ? "paper--winner" : "",
        scissors: player.win && player.hand == GAME_NAME.scissors ? "scissors--winner" : "",
        rock: player.win && player.hand == GAME_NAME.rock ? "rock--winner" : ""
    }

    const aiWinShadowClass = {
        paper: ai.win && ai.hand == GAME_NAME.paper ? "paper--winner" : "",
        scissors: ai.win && ai.hand == GAME_NAME.scissors ? "scissors--winner" : "",
        rock: ai.win && ai.hand == GAME_NAME.rock ? "rock--winner" : ""
    }

    return (

        <div className="show-winner-container mt-4">
            <div className="flex-wrapper">
                {/* <!-- player hand --> */}
                <div className={`icon-wrapper order-md-1 ${player.win && "-z-1"}`}>
                    <button className={`main__icon-btn--check ${player.hand == GAME_NAME.paper ? "main__icon-btn--paper" : player.hand == GAME_NAME.rock ? "main__icon-btn--rock" : "main__icon-btn--scissors"} ${playerWinShadowClass.paper} ${playerWinShadowClass.rock} ${playerWinShadowClass.scissors}`}>
                        <figure className="icon-figure">
                            <img src={`./assets/images/${player.hand == GAME_NAME.paper ? "icon-paper.svg" : player.hand == GAME_NAME.rock ? "icon-rock.svg" : "icon-scissors.svg"}`} alt="move icons" />
                        </figure>
                    </button>
                    <p className="picked-para">you picked</p>
                </div>
                {/* <!-- Ai hand --> */}
                {isAiMoveLoading ?
                    <div className={`icon-wrapper order-md-3 positon-center`}>
                        <div className="main__icon-div--ai-delay-move">
                        </div>
                        <p className="picked-para">the house picked</p>
                    </div>
                    :
                    <div className={`icon-wrapper order-md-3 ${ai.win && "-z-1"}`}>
                        <button className={`main__icon-btn--check ${ai.hand == GAME_NAME.paper ? "main__icon-btn--paper" : ai.hand == GAME_NAME.rock ? "main__icon-btn--rock" : "main__icon-btn--scissors"} ${aiWinShadowClass.paper} ${aiWinShadowClass.rock} ${aiWinShadowClass.scissors}`}>
                            <figure className="icon-figure">
                                <img src={`./assets/images/${ai.hand == GAME_NAME.paper ? "icon-paper.svg" : ai.hand == GAME_NAME.rock ? "icon-rock.svg" : "icon-scissors.svg"}`} alt="move icons" />
                            </figure>
                        </button>
                        <p className="picked-para">the house picked</p>
                    </div>}
                {isShowPlayAgain && <div className="play-again-wrapper order-md-2">
                    <h2 className="play-again__h2">{player.win ? "you win" : ai.win ? "you lose" : "both tie"}</h2>
                    <button onClick={() => {
                        setIsShowPlayAgain()
                        handlePlayAgain()
                    }} className="paly-again__btn">play again</button>
                </div>}
            </div>
        </div>
    )
}