import Main from "./Main";
import { useState } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';
import Results from "./Results";






const Restart=()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
             <React.StrictMode>
               <Main/>
             </React.StrictMode>
    );
 }
 
 
 
 
 
 export default function Guesnum(props){
   
    let ran=props.ran;
    const[list,addlist]=useState([]);
    const[str,addstr]=useState("");
    const [result,setresult]=useState("");
    const [col,setcolor]=useState("green");
    const Check=(props)=>{
    
    let ran=props.ran;
    let usergues=document.getElementById("inp1").value;
    document.getElementById("inp1").value="";
    usergues=parseInt(usergues);
    console.log(ran);
    if(usergues===ran){
        setcolor("green");
        setresult("you are correct");
        addstr(`${usergues} correct`);
        addlist([str,...list]);
        
    }
    else if(ran<usergues){
        setcolor("red");
        setresult("your gues is too high");
        addstr(`${usergues} Wrong`);
        addlist([str,...list]);
    }
    else{
        setcolor("red");
        setresult("your gues is too low");
        addstr(`${usergues} Wrong`);
        addlist([str,...list]);
    
    }
    }

    return(
    <div>
        <div className="in">
           <input  className="input" id="inp1" type="text" placeholder="Gues Number From 1 to 100"/>
           <br/>
           <h1 style={{backgroundColor:col}}>{result}</h1>
           <br/>
           <br/>
           <button  onClick={()=>Check(ran={ran})}>Check</button>
           <br></br><br/>
           <button onClick={()=>Restart()}>Restart</button>
           <br/>
           <br/>
           
            <h1 style={{backgroundColor:col}}>{str}</h1>
           
        </div>
    </div>
    );
}