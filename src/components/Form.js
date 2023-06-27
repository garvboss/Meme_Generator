// import memesData from "../memedata"
import React from "react"
export default function Form(){

    const [meme, changememeimage] = React.useState({
        topText: "",
        bottomText: "",
        randomimage: "https://i.imgflip.com/22bdq6.jpg"
    })

    const [allMeme, setAllMeme] = React.useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    let url
    function getMeme(){
        
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        url = allMeme[randomNumber].url
        changememeimage(
            prevmeme => ({
                ...prevmeme,
                randomimage: url
            })
        )
    }
    function handleChange(event){
        const {name, value} = event.target
        changememeimage(
            prevmeme => ({
                ...prevmeme,
                [name]: value
            })
        )
    }
    return(
        <main>
        <div className="form">
            <input 
                className="form-input" 
                type="text" 
                placeholder="Top Text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                className="form-input" 
                type="text" 
                placeholder="Botom Text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
            <button 
                className="but"
                onClick={getMeme}>
                Get a new meme image
            </button>
        </div>
        <div className="random-image">
            <img className="meme-image" src = {meme.randomimage} alt = "random_image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        </main>
    );
}