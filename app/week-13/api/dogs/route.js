import { neon } from "@neondatabase/serverless";
import z from "zod";

export async function GET() {
    // fetch all dogs from the database
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);

    const response = await sql`SELECT * FROM dogs`;

    return new Response(JSON.stringify(response), { status: 200 });
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

    // insert new dog object into the database
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);

    const response = await sql`INSERT INTO dogs (name,age) VALUES ( ${newDog.name}, ${newDog.age} ) RETURNING *`;

    return new Response(JSON.stringify(response), { status: 201 });

}