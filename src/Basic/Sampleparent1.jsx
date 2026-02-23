import React from "react";
import Samplechild1 from "./Samplechild1";
class Sampleprarent1 extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         candidate : "Kumar",
    //         candidate : "arun",
    //     }
    // }
    constructor(props){
        super(props)
        this.state={
            candidate : "Kumar",
            candidate : "arun",
            candidate : "Raja",
        }
        // this.nextCandidate =this.setState(this);
    }

    nextCandidate =()=>{
        this.setState({candidate:"Suhait"});
    }

    nextApply(){
        this.setState({candidate:"Kowsi"});
    }


    render(){
        return(
            <div>
                <h1>Hi This is sample aparent 1</h1>
                <h2>Class Component method</h2>
                <h4>State Props Event Handlers</h4>
                <h3>This is parent</h3>

                <p>Thank you ..! <strong> {this.state.candidate} </strong> Your Application submitted done..!</p>
                <button onClick={this.nextCandidate}>Next Condidate</button>
                {/* <button onClick={this.nextApply}>Next Condidate</button> */}

                <Samplechild1  candidate ="raja" />
            </div>
        )
    }
};
export default Sampleprarent1;