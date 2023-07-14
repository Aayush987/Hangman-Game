const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"

    }}  />
)
const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "0px"

    }}  />
)
const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "30deg",
        top: "115px",
        right: "0px",
    }}  />
)
const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "-30deg",
        top: "115px",
        right: "-90px"

    }}  />
)
const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "-30deg",
        top: "230px",
        right: "0px",
    }}  />
)
const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "30deg",
        top: "230px",
        right: "-90px"

    }}  />
)
const BODY_PARTS = [HEAD,BODY,LEFT_ARM,RIGHT_ARM,LEFT_LEG,RIGHT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number;
}

export function HangmanDrawing({numberOfGuesses} : HangmanDrawingProps ) {
    
    return ( 
    <div style = {{position: "relative"}}>
       {BODY_PARTS.slice(0,numberOfGuesses)} 
      <div style = {{height: "50px", width: "10px", background: "black", marginLeft: "120px", position: "absolute",top: 0, right: 0}}/>
      <div style={{height: "10px", width: "200px",background: "black", marginLeft: "120px"}} />
      <div style = {{height: "300px", width: "10px", background: "black", marginLeft: "120px"/*we get 120px by dividing pur width below by 2 which is 250px */}} />  
      <div style = {{height: "10px", width: "250px", background: "black"}} />
      
    </div>
    )
}