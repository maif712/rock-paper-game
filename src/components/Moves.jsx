import { useAppContext } from "../AppContext"


export default function Moves() {

    const {handlePlayer} = useAppContext()

    return (
        <main>
            <div className="container">
                <div className="main__flex-wrapper">
                    <div className="main__grid-wrapper">
                        <button onClick={() => handlePlayer("paper")} className="main__icon-btn main__icon-btn--paper">
                            <figure className="icon-figure">
                                <img src="./assets/images/icon-paper.svg" alt="paper icon" />
                            </figure>
                        </button>
                        <button onClick={() => handlePlayer("scissors")} className="main__icon-btn main__icon-btn--scissors grid-right">
                            <figure className="icon-figure">
                                <img src="./assets/images/icon-scissors.svg" alt="scissors icon" />
                            </figure>
                        </button>
                        <button onClick={() => handlePlayer("rock")} className="main__icon-btn main__icon-btn--rock grid-center">
                            <figure className="icon-figure">
                                <img src="./assets/images/icon-rock.svg" alt="rock icon" />
                            </figure>
                        </button>
                    </div>
                </div>
            </div> 
        </main>
    )
}