import { useAppContext } from "../AppContext"


export default function Rules() {

    const { isRules, setIsRules } = useAppContext()

    return (
        <footer>

            <div className="rules" data-visible={isRules ? "true" : "false"}>
                <h2 className="rules__h2">rules</h2>
                <figure className="rules__figure">
                    <img src="./assets/images/image-rules.svg" alt="rules" />
                </figure>
                <button onClick={() => setIsRules(false)} className="rules__close-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path fill="#3B4262" fillRule="evenodd"
                            d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                            opacity=".25" />
                    </svg>
                </button>
            </div>
            <div className="footer__autho-wraper">
                <div onClick={() => setIsRules(true)} className="footer__rule-btn">
                    <button className="footer__btn">rules</button>
                </div>
                <p className="footer__para">Made with <span className="heart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#dc2e4e" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </span>by Maif712, 2024 || Frontend Mentor</p>
            </div>
        </footer>
    )
}