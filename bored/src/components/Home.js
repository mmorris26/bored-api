import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();

    function navigateToYesScreen(){
        navigate('/yes')
    }

    function navigateToNoScreen(){
        navigate('/no')
    }

    return(
    <div className="home-div">
        <h1>Are You Bored and Don't Know What To Do?</h1>
        <button onClick={navigateToYesScreen}>Yes!</button>
        <button onClick={navigateToNoScreen}>No!</button>
    </div>
    )
}