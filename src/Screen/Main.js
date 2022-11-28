import "../Screencss/Main.css"
import Guesnum from "./Guesnum";
import Results from "./Results";

export default function Main(){
   var ran=Math.floor(Math.random()*100);
  


return(
    <div>
        <div className="h1">
           <h1>Gues The Number</h1>
            <h2>1.2.3.</h2>
        </div>
        <Guesnum ran={ran}/>
        
   </div>
);
}