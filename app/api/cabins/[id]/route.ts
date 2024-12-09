import {getCabin, getBookedDatesByCabinId} from "@/app/_lib/data-service";

export async function GET(request: any, {params}: any) {
    const {id} = params;

    if (!id) {
        return new Response(JSON.stringify({error: "Cabin ID is required"}), {status: 400});
    }

    const [cabin, bookedDates] = await Promise.all([
        getCabin(id),
        getBookedDatesByCabinId(id),
    ]);
    return Response.json({cabin, bookedDates});
}
