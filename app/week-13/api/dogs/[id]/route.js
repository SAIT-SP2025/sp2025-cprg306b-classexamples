import { neon } from "@neondatabase/serverless";

export async function GET(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);

    // retrieve all the dogs from the database
    const response = await sql`SELECT * FROM dogs`;

    const thisDog = response.find((dog) => idNum === dog.id);
    if (!thisDog) {
        return new Response("This dog does not exist.", { status: 404 });
    }
    return new Response(JSON.stringify(thisDog), { status: 200 });
}

export async function PUT(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    // Validation - zod
    const response = await sql`UPDATE dogs SET name=${dog.name}, age=${dog.age} WHERE id=${idNum} RETURNING *`;
    return new Response(JSON.stringify(response), { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
    const dog = await request.json();
    const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    if (dog.name) {
        // validation for the name
        await sql`UPDATE dogs SET name = ${dog.name} WHERE id = ${idNum}`;
    }
    if (dog.age) {
        // validation for the age
        await sql`UPDATE dogs SET age = ${dog.age} WHERE id = ${idNum}`;
    }
    return new Response(null, { status: 204 });
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    const idNum = Number(id);
        const dbUrl = process.env.DATABASE_URL ?? "";
    const sql = neon(dbUrl);
    // remove the dog number [idNum] from the database
    try {
        await sql`DELETE FROM dogs WHERE id = ${idNum}`;
    } catch (error) {
        let errMsg = `Dog ${idNum} could not be deleted.`;
        return new Response(errMsg, { status: 500 });
    }
    let responseText = `Dog id number ${idNum} was deleted.`;
    return new Response(responseText, { status: 200 });
}