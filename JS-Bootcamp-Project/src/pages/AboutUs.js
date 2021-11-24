import React from "react";
import ContributionCount from "../Components/CountNumber";

export default function Us(props) {
    return (
        <div>
            <h1>This is a render of the About us Page</h1>
            <p>
            This Site was created in 11/13/21 by our CEO Carlos Coreas who was a Student Coder. Although he already knew some
            basic static HTML understanding, He developed this site for his JavaScript Final Project. 
            In This page you will see a pretend counter that shows the amount of recipes published by our fake followers
            </p>
            <ContributionCount />
            <h3>This is the Number of Fake Contributions from our users</h3>
        </div>
    )
}