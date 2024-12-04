import CabinCard from "@/app/_components/CabinCard";

export const metadata = {
    title: "Cabines",
}


export default function Page() {
    const cabins: any = [];

    return <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
            Nos Cabines de luxe
        </h1>
        <p className="text-primary-200 text-lg mb-10">
            Des cabanes douillettes mais obscures, nichées au cœur du Mordor. Imaginez-vous vous réveiller au son du grondement lointain du Mont Doom, la lueur ardente peignant le ciel. Passez vos
            journées à errer dans les terres sinistres et ombragées, ou peut-être trouvez-vous du réconfort dans votre cabane isolée, en vous reposant sous les yeux toujours vigilants du Seigneur des
            Ténèbres. Profitez de la beauté envoûtante de la nature dans ce monde désolé mais captivant. Une retraite parfaite pour ceux qui cherchent à échapper à la lumière, où la paix n&#39;existe que
            sous la forme du silence. Bienvenue au cœur des ténèbres.
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


