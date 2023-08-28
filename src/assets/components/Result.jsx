
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
      <p className="note">It's important to note that, whatever results you do come with, doesn't mean you have a mental condition. It's just that, you potentially have something deep within you that you compensate for.
        Most people find the results rather accurate, though. Take them with a grain of salt.
      </p>
      <p>
        <b>General Info: </b> <br />
        {data[num].info}
      </p>
      <p>
        <b>Repression: </b> <br />
        {data[num].repression}
      </p>
      <p>
        <b>Denies it by: </b> <br />
        {data[num].denies}
      </p>
      <p>
        <b>Sublimation: </b> <br />
        {data[num].sublimation}
      </p>

      <button className="close-fixed" onClick={()=> handleClick()}>X</button>
    </div>
  );
}

export default Result;
