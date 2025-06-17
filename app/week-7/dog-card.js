

export default function DogCard({dogObj, removeDogFunc}){

    const {id, name, breed, photoUrl} = dogObj;

    return(
        <div className="max-w-96 p-2 bg-blue-300 rounded-lg">
            <div className="inline-block align-middle">
               { photoUrl && <img className="max-h-28" src={photoUrl} />}
            </div>
            <div className="inline-block ml-3 align-middle">
                <h3 className="text-xl">{name}</h3>
                <p>ID: {id}</p>
                <p>Breed: {breed}</p>
                <button onClick={removeDogFunc} id={id}>Remove Dog</button>
            </div>
        </div>
    );
}