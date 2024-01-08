import { useAppContext } from "../AppContext"


export default function TopHeader() {

    const {player} = useAppContext()

    return (
        <header>
            <div className="header__flex-wrapper container">
                <div className="header__logo-icon">
                    <figure>
                        <img src="./assets/images/logo.svg" alt="logo" />
                    </figure>
                </div>
                <div className="header__score">
                    <span className="header__score-span">score</span>
                    <span className="header__number-span">{player.score}</span>
                </div>
            </div>
        </header>
    )
}