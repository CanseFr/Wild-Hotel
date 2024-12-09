import CabinCard from "@/app/_components/CabinCard";
import {getCabins} from "@/app/_lib/data-service";
import {CABIN_CAPACITY} from "@/app/_enums/cabins-size";

export default async function CabinList({filter}: any) {
    const cabins: any = await getCabins();

    if (!cabins.length) return null;

    let displayCabins;
    if (filter === CABIN_CAPACITY.ALL) displayCabins = cabins;
    if (filter === CABIN_CAPACITY.SMALL) displayCabins = cabins.filter((c: any) => c.maxCapacity <= 3);
    if (filter === CABIN_CAPACITY.MEDIUM) displayCabins = cabins.filter((c: any) => c.maxCapacity >= 4 && cabins.maxCapacity <= 7);
    if (filter === CABIN_CAPACITY.LARGE) displayCabins = cabins.filter((c: any) => c.maxCapacity >= 8);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayCabins.map((cabin: any) => (
                <CabinCard cabin={cabin} key={cabin.id}/>
            ))}
        </div>
    )
}