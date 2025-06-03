"use client"

import { useState } from "react";

export default function RegistrationForm() {

    // Form State variables
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [subscription, setSubscription] = useState("");
    const [message, setMessage] = useState("");

    // form change handle functions
    const handleFullNameChange = (event) => {
        console.dir(event.target.value);
        setFullName(event.target.value);
    }
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthDateChange = (event) => setBirthDate(event.target.value);
    const handleSubscriptionChange = (event) => setSubscription(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);

    // form submission function
    const handleSubmit = (event) => {
        event.preventDefault();

        if(subscription == ""){
            alert("please select a plan");
            return;
        }

        let registrationObject = {
            fName: fullName,
            mail: email,
            bDay: birthDate,
            plan: subscription,
            msg: message
        }

        alert(`
            Name: ${registrationObject.fName} | 
            Email: ${registrationObject.mail} |
            Birthday: ${registrationObject.bDay} |
            Plan Type: ${registrationObject.plan} |
            Message: ${registrationObject.msg}
        `);

        setFullName("");
        setEmail("");
        setBirthDate("");
        setSubscription("");
        setMessage("");

    }

    return(
        <form onSubmit={handleSubmit} className="p-4 bg-blue-100">
            <div className="mb-3">
                <label className="inline-block w-40">Full Name:</label>
                <input
                    type="text"
                    className="border border-blue-500 bg-white px-2 py-1 rounded focus:bg-amber-100"
                    onChange={handleFullNameChange}
                    value={fullName}
                    required={true}
                />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Email:</label>
                <input type="email" required={true} className="border border-blue-500 bg-white px-2 py-1 rounded focus:bg-amber-100" name="user_mail" onChange={handleEmailChange} value={email} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Birth Date:</label>
                <input type="date" className="border border-blue-500 bg-white px-2 py-1 rounded focus:bg-amber-100" onChange={handleBirthDateChange} value={birthDate} />
            </div>
            <div className="mb-3">
                <label className="inline-block w-40">Subscription Plan:</label>
                <select className="border border-blue-500 bg-white px-2 py-1 rounded focus:bg-amber-100" onChange={handleSubscriptionChange} value={subscription}>
                    <option disabled value="">--- Please Select a Plan ---</option>
                    <option value="free">Free Plan</option>
                    <option value="basic">Basic Plan</option>
                    <option value="premium">Premium Plan</option>
                </select> 
            </div>
            <div className="mb-3">
                <label className="inline-block w-40 align-top">Message:</label>
                <textarea className="border border-blue-500 bg-white px-2 py-1 rounded focus:bg-amber-100" onChange={handleMessageChange} value={message}></textarea>
            </div>

            <div className="mb-3">
                <button className="bg-blue-500 text-white rounded px-3 py-2 hover:bg-green-500 active:bg-amber-500">Submit Registration</button>
            </div>
        </form>
    );
}