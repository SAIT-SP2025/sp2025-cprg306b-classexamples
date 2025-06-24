"use client"

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function SingleArt(){

    const [singleArt, setSingleArt] = useState(null);

    async function getArtworkById(){
        try {
            const response = await fetch("https://api.artic.edu/api/v1/artworks/129884");
            if(!response.ok) console.log(response.status);
            // console.dir(response);
            const rawData = await response.json();
            console.dir(rawData.data);
            setSingleArt(rawData.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getArtworkById();
    } , [] );

    return(
        <section>
            {singleArt && <Artwork artworkObj={singleArt} />}
        </section>
    );
}