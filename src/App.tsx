import { useCallback, useEffect, useState } from 'react'
import wordsData from './wordsSentence.json'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

function getRandomWordAndSentence(data: { words: { word: string; sentence: string; }[] }) {
  const randomIndex = Math.floor(Math.random() * data.words.length);
  return data.words[randomIndex];
}

function App() {
  const [wordAndSentence, setWordAndSentence] = useState<{ word: string, sentence: string }>(getRandomWordAndSentence({words: wordsData}));
  const [guessedLetters, setguessedLetters] = useState<string[]>([])
  
  const wordToGuess: string = wordAndSentence.word;
  const sentenceToDisplay: string = wordAndSentence.sentence;

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
    setWordAndSentence(getRandomWordAndSentence({words: wordsData}));

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
  },[addGuessedLetters])

  const handleRestart = () => {
    setguessedLetters([]);
    setWordAndSentence(getRandomWordAndSentence(
      {words: wordsData}));
  };

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
    {isWinner && "WINNER!, Click Button to try again"}
    {isLoser && "YOU LOSE! Nice Try,Click Button to try again"}
    
  </div>
  <div style={{ fontSize: "1.5rem", textAlign: "center", fontWeight: "bolder",border: "3px double blue" , borderRadius: "10%"}}>
        Sentence Clue: {sentenceToDisplay}
      </div>
    <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
    <HangmanWord reveal = {isLoser} guessedLetters = {guessedLetters} wordToGuess = {wordToGuess}/>
    <div style = {{alignSelf: "stretch"}}>
    <Keyboard disabled = {isWinner || isLoser} activeLetter = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters = {incorrectLetters}
            addGuessedLetter = {addGuessedLetters}
    />
   </div>
   <button style = {{width: "200px", height: "100px", fontSize: "2rem", border: "5px solid black", borderRadius: "10%", backgroundColor: "#51BBFE", cursor:"pointer", fontWeight: "bolder"}} onClick={handleRestart}>Play Again</button>
   
    </div>
   )
}

export default App
