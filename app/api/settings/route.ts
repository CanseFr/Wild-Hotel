import {getSettings} from "@/app/_lib/data-service";

export async function GET() {

    try {
        const settings = await getSettings();
        return Response.json(settings);

    } catch {
        return Response.json({error: "Setting Get Error"}, {status: 400})
    }
}
