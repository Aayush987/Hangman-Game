import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  
  type keyboardProps = {
    activeLetter: string[],
    disabled?: boolean
    ,inactiveLetters: string[]
    ,addGuessedLetter: (letter: string) => void
  }


export function Keyboard({ activeLetter,inactiveLetters,disabled = false,addGuessedLetter }: keyboardProps) {
    return (
       <div style={{display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem"}}>
        {KEYS.map(key => {
            const isActive = activeLetter.includes(key)
            const isInActive = inactiveLetters.includes(key)
            return (
                <button onClick={() =>addGuessedLetter(key)} className = {`${styles.btn} ${isActive ? styles.active : "" } ${isInActive? styles.inactive : ""}`} disabled = {isActive || isInActive || disabled} key = {key}>{key}</button>
       )
        }   
        )}
       </div>
    )
}