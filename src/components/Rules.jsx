import { useAppContext } from "../AppContext"


export default function Rules() {

    const {isRules, setIsRules} = useAppContext()

    return (
        <footer>
            <div onClick={() => setIsRules(true)} className="footer__rule-btn">
                <button className="footer__btn">rules</button>
            </div>
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
        </footer>
    )
}