import CabinCard from "@/app/_components/CabinCard";

export const metadata = {
    title: "Cabins",
}


export default function Page() {
    const cabins: any = [];

    return <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
            Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
            Cozy yet darkened cabins, nestled deep within the heart of the Mordor. Imagine waking up to the distant rumble of Mount Doom, the fiery glow painting the sky. Spend your days wandering
            through the ominous, shadowy lands, or perhaps find solace in your secluded cabin, resting under the ever-watchful eyes of the Dark Lord. Enjoy the haunting beauty of nature in this
            desolate yet captivating world. A perfect retreat for those seeking an escape from the light, where peace exists only in the form of silence. Welcome to the heart of darkness.
        </p>

        {cabins.length > 0 && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
                {cabins.map((cabin: any) => (
                    <CabinCard cabin={cabin} key={cabin.id}/>
                ))}
            </div>
        )}
    </div>
}


