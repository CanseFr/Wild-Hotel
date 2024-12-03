import Link from "next/link";
import Navigation from "@/app/components/Navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <h1>Welcom to the Wild </h1>

            {/*Optimisation SPA checker la doc concernant le cache ...*/}
            <Link href="/cabins">Explore luxury cabins</Link>
        </>
    );
}
