import Image from "next/image";
import imgAbout1 from "@/public/about-1.jpg"
import imgAbout2 from "@/public/about-2.jpg"
import {getCabins} from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
    title: "About",
}

export default async function Page() {

    const cabins = await getCabins()

    return (
        <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
            <div className="col-span-3">
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Welcome to The Wild Hotel
                </h1>

                <div className="space-y-8">

                    <p>
                        Où la beauté menaçante de la nature et une vie confortable se mêlent d&#39;une manière inattendue. Cachées dans les profondeurs du Mordor, ces cabanes sont votre refuge loin de
                        tout. Mais ce n&#39;est pas seulement à propos des cabanes sombres et imposantes. C&#39;est l&#39;expérience de se reconnecter avec une terre impitoyable et de profiter des
                        plaisirs simples loin des regards du monde.
                    </p>
                    <p>
                        Nos {cabins.length} cabanes de luxe offrent un abri confortable, mais la vraie liberté et la paix se trouvent dans les montagnes environnantes. Errez à travers des terres stériles et
                        volcaniques, respirez l&#39;air lourd, et contemplez les cendres qui tombent du ciel ou la lumière incandescente de l&#39;œil de Sauron au loin.
                    </p>
                    <p>
                        C&#39;est ici que des souvenirs inoubliables sont forgés, entourés par la grandeur sombre de la nature. Un endroit pour ralentir, se détendre, et ressentir la camaraderie, loin
                        des ruines de l&#39;ancien monde.
                    </p>
                </div>
            </div>

            <div className="col-span-2 relative aspect-square">
                <Image
                    fill
                    className="object-cover"
                    placeholder="blur"
                    src={imgAbout1}
                    quality={100}
                    alt="Family sitting around a fire pit in front of cabin just befor fighting"
                />
            </div>

            <div className="col-span-2 relative aspect-square">
                <Image fill
                       className="object-cover"
                       placeholder="blur"
                       src={imgAbout2}
                       quality={100}
                       alt="Family that manages The Wild Oasis"/>
            </div>

            <div className="col-span-3">
                <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                    Managé par la Mordor family depuis 1962
                </h1>

                <div className="space-y-8">
                    <p>
                        Depuis des siècles, l’Oasis Sauvage a été un refuge précieux, dirigé par notre famille. Fondé par nos ancêtres, ce havre a été nourri avec soin et attention, transmis à travers
                        les générations comme un témoignage de notre engagement à créer un environnement sombre mais accueillant, à l’image des terres du Mordor.
                    </p>
                    <p>
                        Au fil des années, nous avons préservé l’essence de l’Oasis Sauvage, alliant la beauté intemporelle des terres dévastées du Mordor à la touche personnelle qu’une entreprise
                        familiale peut offrir. Ici, vous n&#39;êtes pas seulement un visiteur ; vous êtes un membre de notre famille élargie, partageant un lieu où règnent la force et l’obscurité.
                        Rejoignez-nous dans l’Oasis Sauvage, où tradition et tranquillité se mêlent, et chaque visite vous ramène à la maison, sous l’ombre des montagnes noires.
                    </p>


                    <div>
                        <Link
                            href="/cabins"
                            className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                        >
                            Explorez nous cabines
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
