import React from "react";
import { useState } from "react";
import Samplechild2 from "./Samplechild2";
import Samplechild1 from "./Samplechild1";
function Sampleprarent2(){
    const [candidate,setCandidate] = useState("Kumar");

    function nextApply(){
        setCandidate("Arun");
    }
    return(
        <>
            <h1>Hi This is sample aparent 2</h1>
                <h2>Functional Component method</h2>
                <h4>State Props Event Handlers</h4>
                <h3>This is parent</h3>

                <p>Thank you ..! <strong> {candidate} </strong> Your Application submitted done..!</p>
                <button onClick={()=>setCandidate("Raja")}>Next Condidate</button>
                <button onClick={nextApply}>Next Condidate</button>

                <Samplechild2 apply="MAhendran" />
                {/* <Samplechild1 candidate="kani"/> */}
        </>
    )
};
export default Sampleprarent2;