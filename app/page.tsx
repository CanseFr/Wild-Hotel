import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcom to the Wild </h1>

            {/*Optimisation SPA checker la doc concernant le cache ...*/}
            <Link href="/cabins">Explore luxury cabins</Link>
        </>
    );
}
