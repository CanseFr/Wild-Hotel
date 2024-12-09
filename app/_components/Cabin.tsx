import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import {MapPinIcon, UsersIcon} from "@heroicons/react/24/solid";
import {BugAntIcon} from "@heroicons/react/16/solid";

export default function Cabin({cabin}: any) {

    const {image, description, maxCapacity, name} = cabin;

    return (
        <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
            <div className="relative scale-[1.15] -translate-x-3">
                <Image fill className="object-cover" src={image} alt={`Image Cabine ${name}`}/>
            </div>

            <div>
                <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
                    Cabine {name}
                </h3>

                <p className="text-lg text-primary-300 mb-10">
                    <TextExpander>
                        {description}
                    </TextExpander>
                </p>

                <ul className="flex flex-col gap-4 mb-7">
                    <li className="flex gap-3 items-center">
                        <UsersIcon className="h-5 w-5 text-primary-600"/>
                        <span className="text-lg">Jusqu&#39;à <span className="font-bold">{maxCapacity}</span>{" "}invités</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-600"/>
                        <span className="text-lg">Situé au coeur de{" "}<span className="font-bold">La Montagne Du Destin</span> (Mordor)</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <BugAntIcon className="h-5 w-5 text-primary-600"/>
                        <span className="text-lg">À l&#39;abris des Orcs  <span className="font-bold">100%</span> garanti</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}