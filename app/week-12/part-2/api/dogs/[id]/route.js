
export async function GET(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    // fake database
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 }
    ];
    const thisDog = dogs.find((dog) => idNum === dog.id);
    if (!thisDog) {
        return new Response("This dog does not exist.", { status: 404 });
    }
    return new Response(JSON.stringify(thisDog), { status: 200 });
}

export async function PUT(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    // Validation - zod
    // send the new data to the database to overwrite dog number [idNum]
    return new Response(null, { status: 204 });
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    if (dog.name) {
        // validation for the name
        // update the name in the database for dog number [idNum]
    }
    if (dog.age) {
        // validation for the age
        // update the age in the database for dog number [idNum]
    }
    return new Response(null, { status: 204 });
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    // remove the dog number [idNum] from the database
    let responseText = `Dog id number ${idNum} was deleted.`;
    return new Response(responseText, {status:200});
}