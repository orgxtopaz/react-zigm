import './App.css';
import React from "react"; //IMPORT REACT
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const send =()=>{
    alert("send");
}
const cancel =()=>{
    alert("cancel");
}


const Ok =()=>{
    return(
        <div>
        <button onClick={send}>ok</button>
        <button onClick={cancel}>cancel</button>
    </div>
    )  
}

const notify = ()=>{
    toast.success(<Ok/>,{position:toast.POSITION.TOP_CENTER})

}

function Test(){
 
        return(

            <div>
            <h1>awerwaerwe</h1>
            <button onClick={notify}>hehe</button>
            </div>
        );


    
}





export default Test;