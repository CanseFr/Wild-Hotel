import {createGuest} from "@/app/_lib/data-service";

export async function POST(request: any) {
    const newGuest = await request.json();

    try {
        const guest = await createGuest(newGuest);
        return Response.json(guest);

    } catch {
        return Response.json({error: "Post Error"}, {status: 400})
    }
}
