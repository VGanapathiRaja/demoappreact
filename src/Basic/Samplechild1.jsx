import React from "react";

class Samplechild1 extends React.Component{
    render(){
        return(
            <section>
                <h2>Hi parent How are you?</h2>

                <p>Thank you  <strong> {this.props.candidate} </strong> your profile shortlisted <br /> Contact With our hr</p>
            </section>
        )
    }
};
export default Samplechild1;