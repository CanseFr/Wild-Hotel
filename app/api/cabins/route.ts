import {getCabins} from "@/app/_lib/data-service";

export async function GET() {

    try {
        const cabins = await getCabins();
        return Response.json(cabins);

    } catch {
        return Response.json({error: "Cabins ID not exist"}, {status: 400})
    }
}
