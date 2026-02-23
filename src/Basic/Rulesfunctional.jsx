import React from 'react'
import "./Style.css";
import carImg from '../Assets/car.png'
export default function Rulesfunctional() {

    let arr =[];

    function funName1(){
        return ;
    }

    const funName2 =()=>{
        return ;
    }

    // let isValid=true;
    let isValid=false;
    if(isValid){
        alert("working");
    }
    else{
        alert("Not working");
    }

    for(let i=0; i<=3; i++){
        alert("Hi team");
    }


  return (
    <div>
        Rulesfunctional 
        <h1>Functional Component   s</h1>

        <h1 style={{
            color:"red",
            padding:"30px", 
            border:'2px solid red', 
            margin:"20px",
            fontSize:"66px",
            backgroundColor:"yellow"
            }} >hello world</h1>


            <h2 id='heading'>Hello world</h2>


            <p className='heading' >hi Friends and Team</p>


            <img src={carImg}  width={"200px"}></img>
            <br></br>
            <hr></hr>
            <input></input>

            <img src="" alt="" />
            <br />
            <hr />
            <input />
    </div>
  )
}
