import Header from "./assets/components/Header";
import MainImage from "./assets/components/MainImage";
import Result from "./assets/components/Result";
import "./index.css";
import { useState } from "react";





function App() {

    
    const [picked, setPicked] = useState(1)

    function handleClick(val) {
        setPicked(val)
        console.log(picked)
        let resultDiv = document.querySelector(".result-container")
        
        if (resultDiv) {
            resultDiv.style.display = 'block';
        }
        
    }




    

    return (
    <>
    <Header />
    <MainImage />
    <p>Pick the face you find scary</p>
    <div className="choice-grid">
        <button onClick={()=> handleClick(1)} >1</button>
        <button onClick={()=> handleClick(2)}>2</button>
        <button onClick={()=> handleClick(3)}>3</button>
        <button onClick={()=> handleClick(4)}>4</button>
        <button onClick={()=> handleClick(5)}>5</button>
        <button onClick={()=> handleClick(6)}>6</button>
        <button onClick={()=> handleClick(7)}>7</button>
        <button onClick={()=> handleClick(8)}>8</button>
{/* 
      <Button num="1" onClick={() => console.log('nigga')}/>
      <Button num="2"/>
      <Button num="3"/>
      <Button num="4"/>
      <Button num="5"/>
      <Button num="6"/>
      <Button num="7"/>
      <Button num="8"/> */}
    </div>
    <Result pickedNum={picked}/>
    </>
    )
    
}

export default App