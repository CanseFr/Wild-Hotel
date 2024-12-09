import {getBooking} from "@/app/_lib/data-service";

export async function GET(request: any, {params}: any) {
    const {id} = params;

    if (!id) {
        return new Response(JSON.stringify({error: "Booking ID is required"}), {status: 400});
    }

    try {
        const booking = await getBooking(id);
        return Response.json(booking);

    } catch {
        return Response.json({error: "Guest ID not exist"}, {status: 400})
    }

}
