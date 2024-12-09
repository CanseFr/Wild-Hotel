import {createBooking} from "@/app/_lib/data-service";

export async function POST(request: any) {
    const newBooking = await request.json();

    try {
        const booking = await createBooking(newBooking);
        return Response.json(booking);

    } catch {
        return Response.json({error: "Booking ID not exist"}, {status: 400})
    }

}
