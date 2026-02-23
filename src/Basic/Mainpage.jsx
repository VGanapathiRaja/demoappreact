import React, { Fragment } from "react";
import Sampleprarent1 from "./Sampleparent1";
import Sampleprarent2 from "./Sampleparent2";
import Rulesfunctional from "./Rulesfunctional";
import Rulesclass from "./Rulesclass";

export default function Mainpage(){
    return(
        <Fragment>
            <h1>Hello world</h1>
            {/* <Sampleprarent1/>
            <Sampleprarent2/> */}
            <Rulesfunctional/>
            <Rulesclass/>
        </Fragment>
    )
};