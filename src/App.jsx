import { useAppContext } from "./AppContext";
import Mask from "./components/Mask";
import Moves from "./components/Moves";
import Rules from "./components/Rules";
import Result from "./components/Result";
import TopHeader from "./components/TopHeader";



export default function App() {

    const {result} = useAppContext()

    return (
        <>
            <TopHeader />
            {result ? <Result /> : <Moves />}
            <Rules />
            <Mask />
        </>
    )
}