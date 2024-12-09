import CabinList from "@/app/_components/CabinList";
import {Suspense} from "react";
import Spinner from "@/app/_components/Spinner";
import {CABIN_CAPACITY} from "@/app/_enums/cabins-size";
import Filter from "@/app/_components/Filter";

export const metadata = {
    title: "Cabines",
}

// Type de base de la documentation
// type SearchParams = { [key: string]: string | string[] | undefined }

//  Type que j'essai de custom
// type Capacity = "small" | "medium" | "large" | "all";
// type SearchParams = {
//     [key: string]: string | string[] | undefined;
//     capacity?: Capacity;
// };



//  Doc : https://nextjs.org/docs/app/building-your-application/upgrading/version-15#params--searchparams
//  SearchParam est accessible exclusivement sur les fichier page.tsx

export default async function Page({searchParams}: any) {

    const filter = searchParams?.capacity ?? CABIN_CAPACITY.ALL;

    return <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
            Nos Cabines de luxe
        </h1>
        <p className="text-primary-200 text-lg mb-10">
            Des cabanes douillettes mais obscures, nichées au cœur du Mordor. Imaginez-vous vous réveiller au son du grondement lointain du Mont Doom, la lueur ardente peignant le ciel. Passez vos
            journées à errer dans les terres sinistres et ombragées, ou peut-être trouvez-vous du réconfort dans votre cabane isolée, en vous reposant sous les yeux toujours vigilants du Seigneur des
            Ténèbres. Profitez de la beauté envoûtante de la nature dans ce monde désolé mais captivant. Une retraite parfaite pour ceux qui cherchent à échapper à la lumière, où la paix n&#39;existe
            que
            sous la forme du silence. Bienvenue au cœur des ténèbres.
        </p>

        <div className="flex justify-end mb-8">

        <Filter/>
        </div>
        {/*Donner une clé unique pour chaque type de filtre, permet de faire apparaitre le loader durant le changement du filtre*/}
        <Suspense fallback={<Spinner/>} key={filter}>
            <CabinList filter={filter}/>
        </Suspense>
    </div>
}


// Doc : https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#example

// Maintenant, le fetch des cabines ne bloque plus l'intégralité de la page, mais seulement le composant placé dans Suspense. Ainsi, si on fait Ctrl + Shift + P (dans la console navigateur)
// et qu'on désactive JavaScript, on peut constater que le texte apparaît, tandis que la partie liée au fetch des cabines affiche le loader. Cela permet donc d'éviter de bloquer l'ensemble de la page.