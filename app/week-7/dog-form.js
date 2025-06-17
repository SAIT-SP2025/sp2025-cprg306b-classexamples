"use client"

import { useState } from "react";

export default function DogForm({addNewDogFunc, closeFormFunc}){

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleIdChange = (event) => setId(event.target.value);
    const handleNameChange = (event) => setName(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handlePhotoUrlChange = (event) => setPhotoUrl(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // validation
        let newDogObj = {
            id: id,
            name: name,
            breed: breed,
            photoUrl: photoUrl
        }

        addNewDogFunc(newDogObj);

        setId("");
        setName("");
        setBreed("");
        setPhotoUrl("");

        closeFormFunc();

    }

    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/60 flex items-center justify-center z-10 ">
            <form onClick={ (event) => event.stopPropagation()  } onSubmit={handleSubmit} className="bg-green-400 rounded p-5 text-black max-w-sm md:max-w-md">
                <h2 className="text-2xl mb-2">Add a new dog for adoption</h2>
                <div className="mb-2">
                    <label className="inline-block w-30">ID:</label>
                    <input className="bg-white rounded border" type="number" onChange={handleIdChange} value={id} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-30">Name:</label>
                    <input className="bg-white rounded border" type="text" onChange={handleNameChange} value={name} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-30">Breed:</label>
                    <input className="bg-white rounded border" type="text" onChange={handleBreedChange} value={breed} />
                </div>
                <div className="mb-2">
                    <label className="inline-block w-30">Photo URL:</label>
                    <input className="bg-white rounded border" type="text" onChange={handlePhotoUrlChange} value={photoUrl} />
                </div>
                <div>
                    <button type="submit" className="bg-green-700 text-white p-2 rounded hover:bg-emerald-500 cursor-pointer">Add New Dog</button>
                    <button type="button" onClick={closeFormFunc} className="bg-blue-700 text-white p-2 rounded hover:bg-blue-500 cursor-pointer ml-2">Close Form</button>
                </div>
            </form>
        </div>
    );
}