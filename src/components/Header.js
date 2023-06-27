import face from "../images/Troll_Face.png"
export default function Header(){
    return(
        <div className="head">
            <img src = {face} alt="Troll_Face"/>
            <h2>Meme Generator</h2>
        </div>
    );
}