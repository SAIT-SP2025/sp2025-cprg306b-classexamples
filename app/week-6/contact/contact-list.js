"use client"

import { useState } from "react";
import ContactCard from "./contact-card";
import contactData from "./contacts-info.json"

export default function ContactList() {

    let contactArray = contactData.map((contact) => ({ ...contact }));

    const [filter, setFilter] = useState("all");
    const [sortBy, setSortBy] = useState("none");

    const handleFilterChange = (event) => setFilter(event.target.value);
    const handleSortByChange = (event) => setSortBy(event.target.value);

    if (filter != "all") {
        contactArray = contactArray.filter(
            (contact) => contact.type == filter
        );
    }

    if(sortBy != "none"){
        contactArray.sort( (a,b) => { // both compare arguments (a & b) are objects
            if( isNaN( parseInt( a[sortBy] ) ) ){
                let nameA = a[sortBy].toUpperCase();
                let nameB = b[sortBy].toUpperCase();
                if( nameA < nameB ) return -1;
                if( nameA > nameB ) return 1;
                return 0;
            } else {
                return a.id - b.id;
            }
        } );
    }

    return (
        <section>
            <header className="md:flex mb-5 px-10 py-5 bg-blue-300 rounded">
                <div className="block md:flex-1">
                    <label className="mr-2">Filter by:</label>
                    <select onChange={handleFilterChange} className="bg-white rounded px-2 py-1 border">
                        <option value="all">All Contacts</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <div className="block md:flex-1">
                    <label className="mr-2">Sort by:</label>
                    <select onChange={handleSortByChange} className="bg-white rounded px-2 py-1 border">
                        <option value="none">None</option>
                        <option value="id">ID</option>
                        <option value="fname">First Name</option>
                        <option value="lname">Last Name</option>
                    </select>
                </div>
            </header>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {contactArray.map((contact) => (
                    <ContactCard key={contact.id} contactObj={contact} />
                ))}
            </div>
        </section>
    );
}