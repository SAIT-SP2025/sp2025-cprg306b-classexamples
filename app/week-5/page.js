"use client"

import { useState } from "react";
import RegistrationForm from "./controlled-component";

export default function RegistrationPage(){

    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        if ( formOpen ){
            setFormOpen(false);
        } else {
            setFormOpen(true);
        }
    }

    const toggleForm2 = () => setFormOpen(!formOpen);

    return(
        <main>
            <h1 className="text-3xl text-center my-4 font-serif font-black">Registration</h1>
            <button onClick={toggleForm2}>Toggle Registration Form</button>

            { formOpen && <RegistrationForm /> }

            {/* <p>{formOpen ? "Hello!" : "Something Else"}</p> */}
            {/* <RegistrationForm /> */}
        </main>
    );
}