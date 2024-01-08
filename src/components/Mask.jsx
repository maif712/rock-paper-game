import { useAppContext } from "../AppContext"


export default function Mask() {

    const {isRules} = useAppContext()

    return (
        <div id="mask" data-visible={isRules}></div>
    )
}