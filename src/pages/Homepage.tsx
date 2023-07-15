import { Link } from "react-router-dom"
import images from "../images/play-button_1.png"
import styles from "./Homepage.module.css"

export function Homepage() {
  return (
    <>
    <div className= {styles.main}>
        <h1>Hangman Game</h1>
        <Link to = {"/App"}><img src= {images}></img></Link>
    </div>
    <div className= {styles.info}>
        <p>Your old school Hangman game.Rules are simple you have to guess a word shown on the screen.You
            will be presented with blank spaces for the letter missing in the word. Use the keyboard or the buttons
            on the screen to guess the letters.Hint: First start with vowels.
            Be warned, every time you guess a letter wrong you loose a life and the hangman begins to appear, piece by piece.
            Solve the puzzle before the hangman dies🎉🎉🎉🎉.
        </p>
    </div>
    </>
  )
}

export default Homepage