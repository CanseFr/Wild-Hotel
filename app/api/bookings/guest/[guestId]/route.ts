import {getBookings} from "@/app/_lib/data-service";

export async function GET(request: any, {params}: any) {
    const {guestId} = params;

    if (!guestId) {
        return new Response(JSON.stringify({error: "Guest ID is required"}), {status: 400});
    }
    try {
        const bookings = await getBookings(guestId);
        return Response.json(bookings);

    } catch {
        return Response.json({error: "Guest ID not exist"}, {status: 400})
    }
}
