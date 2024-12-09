import {getCabin} from "@/app/_lib/data-service";
import Reservation from "@/app/_components/Reservation";
import {Suspense} from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export async function generateMetadata({params}: any) {
    const {name} = await getCabin(params.cabinId);
    return {title: `Cabine ${name}`}
}

export default async function Page({params}: any) {

    const cabin = await getCabin(params.cabinId);
    const {name} = cabin;

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin}/>
            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
                    Réservez {name} dès aujourd&#39;hui. Payez à l&#39;arrivée.
                </h2>
                <Suspense fallback={<Spinner/>}>
                    <Reservation cabin={cabin}/>
                </Suspense>
            </div>
        </div>
    );
}
