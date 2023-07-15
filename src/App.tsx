import { useCallback, useEffect, useState } from 'react'
import words from './words.json'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

function getWord() {
  return words[Math.floor(Math.random() * (words.length))]
}

function App() {
  const [wordToGuess, setwordToGuess] = useState(getWord)
  const [guessedLetters, setguessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letters => !wordToGuess.includes(letters))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

const addGuessedLetters = useCallback((letter: string) => {
  if (guessedLetters.includes(letter) || isLoser || isWinner)  return

  setguessedLetters(currentLetters => [...currentLetters,letter])
},[guessedLetters, isWinner, isLoser])
  

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
          const key = e.key

      if (key !== "Enter") return
    e.preventDefault()
    setguessedLetters([]) 
    setwordToGuess(getWord())

    }
     document.addEventListener("keypress",handler)

     return () => {
      document.removeEventListener("keypress",handler)
     }
    
  }, [addGuessedLetters, guessedLetters])
  
  useEffect(() =>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key

  if (!key.match(/^[a-z]$/)) return
 
  e.preventDefault()
  addGuessedLetters(key)

}
 document.addEventListener("keypress",handler)

 return () => {
  document.removeEventListener("keypress",handler)
 }
  },[])

   return (
    <div style={{
      minHeight: "100vh",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }
    }>
   
   <div style = {{fontSize: "2rem", textAlign: "center"}}>
    {isWinner && "WINNER!, Click Enter to try again"}
    {isLoser && "YOU LOSE! Nice Try,Click Enter to try again"}
    
  </div>
    <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
    <HangmanWord reveal = {isLoser} guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
    <div style = {{alignSelf: "stretch"}}>
    <Keyboard disabled = {isWinner || isLoser} activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters = {incorrectLetters}
            addGuessedLetter = {addGuessedLetters}
    />
   </div>
    </div>
   )
}

export default App
