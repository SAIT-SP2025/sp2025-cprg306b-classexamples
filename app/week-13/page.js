"use client"

import { useEffect, useState } from "react";

export default function DogPage(){

    const [dogList, setDogList] = useState([]);
    const [dogName, setDogName] = useState("");
    const [dogAge, setDogAge] = useState(0);
    const handleName = (event) => setDogName(event.target.value);
    const handleAge = (event) => setDogAge(event.target.value);
    const handleSubmit = async (event) => {
        event.preventDefault();
        let newDogObj = {
            name: dogName,
            age: Number(dogAge)
        }
        let request = new Request("http://localhost:3000/week-13/api/dogs",{
            method: "POST",
            body: JSON.stringify(newDogObj)
        });
        try {
            const response = await fetch(request);
            if(response.ok){
                let data = await response.json();
                console.log("Success!", data);
            }
        } catch (error) {
            console.log(error);
        }
        getDogList();
    }

    async function deleteDog(event) {
        let idNum = event.target.id;
        let request = new Request(`http://localhost:3000/week-13/api/dogs/${idNum}`, {
            method: "DELETE"
        });
        try {
            const response = await fetch(request);
            if(response.ok){
                let rText = response.text();
                console.log(rText);
            }
        } catch (error) {
            console.log(error);
        }
        getDogList();
    }

    async function getDogList(){
        try {
            const response = await fetch("http://localhost:3000/week-13/api/dogs");
            if(!response.ok)console.log(response.error);
            const data = await response.json();
            setDogList(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getDogList();
    }, [] );

    return(
        <main>
            <header>
                <h1>Dog Control Panel</h1>
            </header>
            <section>
            {
                dogList.map( (dog) => (
                    <div key={dog.id} className="border-b-2" >
                        <p>ID: {dog.id}</p>
                        <p>Name: {dog.name}</p>
                        <p>Age: {dog.age}</p>
                        <button type="button" id={dog.id} onClick={deleteDog}>Delete</button>
                    </div>
                ) )
            }
            </section>
            <form onSubmit={handleSubmit}>
                <h2>Add New Dog</h2>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={handleName} value={dogName} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" onChange={handleAge} value={dogAge} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </main>
    );
}