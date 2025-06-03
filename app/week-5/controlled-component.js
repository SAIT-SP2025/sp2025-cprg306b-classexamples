"use client"

import { useState } from "react";

export default function RegistrationForm() {

    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState(false);



    const handleFullNameChange = (event) => {
        console.dir(event.target.value);
        setFullName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleDisplayName = () => setDisplayName(fullName);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Full Name:</label>
                <input type="text" className="border" onChange={handleFullNameChange} onBlur={handleDisplayName}  />
                {displayName && <p>Welcome, {displayName}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" className="border" name="user_mail" />
            </div>
            <div>
                <label>Birth Date:</label>
                <input type="date" className="border" />
            </div>
            <div>
                <label>Subscription Plan:</label>
                <select className="border">
                    <option>Free Plan</option>
                    <option>Basic Plan</option>
                    <option>Premium Plan</option>
                </select>
            </div>
            <div>
                <label className="align-top">Message:</label>
                <textarea className="border"></textarea>
            </div>

            <div>
                <button>Submit Registration</button>
            </div>
        </form>
    );
}