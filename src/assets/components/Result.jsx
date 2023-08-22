
import { data } from "../../data";

function Result({pickedNum}) {
  console.log(pickedNum)
  function handleClick() {
    let resultDiv = document.querySelector(".result-container")
    
    if (resultDiv) {
        resultDiv.style.display = 'none';
    }
    

}
 let num = pickedNum
  
   
  return (
    <div className="result-container" id="result-container">
      <h1>{data[num].title}</h1>
      <p>
        <b>General Info: </b>
        {data[num].info}
      </p>
      <p>
        <b>Repression: </b>
        {data[num].repression}
      </p>
      <p>
        <b>Denies it by: </b>
        {data[num].denies}
      </p>
      <p>
        <b>Sublimation: </b>
        {data[num].sublimation}
      </p>

      <button className="close-fixed" onClick={()=> handleClick()}>X</button>
    </div>
  );
}

export default Result;
