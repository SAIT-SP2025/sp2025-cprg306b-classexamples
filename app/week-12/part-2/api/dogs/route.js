import z from "zod";

export async function GET() {
    // fetch all dogs from the database
    // SELECT * FROM dogs
    const dogs = [
        { id: 1, name: "Luna", age: 2 },
        { id: 2, name: "Max", age: 4 },
        { id: 3, name: "Rover", age: 3 }
    ];
    return new Response(JSON.stringify(dogs), { status: 200 });
}

export async function POST(request) {
    let newDog = await request.json();
    // Validation
    // if(newDog.name == null || newDog.name == "" || typeof newDog.name !== 'string' || !newDog.name instanceof String){
    //     return new Response("Name must be a non-empty string.", {status:406 } )
    // }
    const newDogSchema = z.object({
        name: z.string(),
        age: z.number().min(1).max(30)
    });
    let validDog = {};
    try {
        validDog = newDogSchema.parse(newDog);
    } catch (error) {
        return new Response("Data does not match valid schema.", { status: 406 });
    }
    validDog.id = 4;
    // insert new dog object into the database
    return new Response( JSON.stringify(validDog) , {status:201});

}