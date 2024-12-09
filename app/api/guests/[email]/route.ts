import {getGuest} from "@/app/_lib/data-service";

export async function GET(request: any, {params}: any) {
    const {email} = params;

    if (!email) {
        return new Response(JSON.stringify({error: "Email is required"}), {status: 400});
    }

    try {
        const guest = await getGuest(email);
        return Response.json(guest);

    } catch {
        return Response.json({error: "Email not exist"}, {status: 400})
    }

}
