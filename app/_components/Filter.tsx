"use client"

import {CABIN_CAPACITY} from "@/app/_enums/cabins-size";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function Filter() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const activeFilter = searchParams.get("capacity") ?? CABIN_CAPACITY.ALL

    function handleFilter(capacity: CABIN_CAPACITY) {
        const params = new URLSearchParams(searchParams)
        params.set("capacity", capacity)
        router.replace(`${pathname}?${params.toString()}`, {scroll: false})
    }

    return (
        <div className=" border border-primary-800 flex">
            {FilterButtonList.map((item: FilterButtonType) => (
                <Button key={item.label} activeFilter={activeFilter} handleFilter={handleFilter} filter={item.capacity}>
                    {item.label}
                </Button>
            ))}
        </div>
    )
}

function Button({filter, handleFilter, activeFilter, children}: any) {
    return <button className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`} onClick={() => handleFilter(filter)}>
        {children}
    </button>
}

const FilterButtonList: FilterButtonType[] = [
    {label: "Toute les cabines", capacity: CABIN_CAPACITY.ALL},
    {label: "1 - 3 invités", capacity: CABIN_CAPACITY.SMALL},
    {label: "1 - 7 invités", capacity: CABIN_CAPACITY.MEDIUM},
    {label: "1 - 12 invités", capacity: CABIN_CAPACITY.LARGE}
]

interface FilterButtonType {
    label: string;
    capacity: CABIN_CAPACITY;
}
