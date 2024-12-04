"use client"

import {useState} from "react";

export default function Counter({user}: any){
    const [count, setCount] = useState(0);
    console.log("Ce console log va apparaitre dans le navigatuer contrairement au composant CABINE-Page")
    console.log(user)

    return(<>
            <p>Il y a {user.length} clients</p>
        <button onClick={()=>setCount((c)=>c+1) }>{count}</button>
    </>
    )
}



// ICi il faut bien distinguer le server du client component

// React Server Components (RSC)
// Les React Server Components sont une fonctionnalité de React qui permet de faire du rendu côté serveur pour certaines parties de l'interface utilisateur (UI). Cela permet de séparer le code côté client et côté serveur dans une application, améliorant ainsi les performances et la gestion des ressources.


//
//
//
// 1. "use client" dans Counter :

// "use client"
//
// import { useState } from "react";
//
// export default function Counter({ user }: any) {
//     const [count, setCount] = useState(0);
//     console.log("Ce console log va apparaitre dans le navigateur contrairement au composant CABINE-Page");
//     console.log(user);
//
//     return (<button onClick={() => setCount((c) => c + 1)}>{count}</button>);
// }




// "use client" est une directive spéciale dans Next.js (version 13 et supérieure), qui indique que ce composant doit être exécuté côté client. Cela signifie que le composant sera rendu dans le navigateur, et toutes les instructions comme useState, useEffect, etc., seront exécutées dans le navigateur également.
//
//     Le console.log dans Counter : Ce console.log sera exécuté dans le navigateur parce que le composant Counter est un composant client. Le console.log(user) aussi affichera la valeur de user passée en tant que prop du composant Counter.
//
//     En résumé, tout ce qui se passe dans Counter est exécuté côté client, ce qui inclut l'affichage du bouton, l'interaction avec le useState, et l'exécution de console.log dans la console du navigateur.
//




// 2. Page avec fetch :

// import Counter from "@/app/components/Counter";
//
// export default async function Page() {
//
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//
//     console.log("Console log dans le serveur")
//
//     return (
//         <div>
//             <h1>Cabins page</h1>
//             <ul>
//                 {data.map((user: any) => (
//                     <li key={user.id}>
//                         <ul>{user.name}</ul>
//                     </li>
//                 ))}
//             </ul>
//             <Counter user={data} />
//         </div>
//     )
// }




// Dans ce code, tu utilises la fonction fetch pour obtenir des données côté serveur, avant que le rendu ne se fasse. Cela signifie que le console.log("Console log dans le serveur") sera exécuté dans le serveur pendant le processus de rendu côté serveur (SSR - Server Side Rendering) de la page.
//
//     Le comportement des logs dans cette page est que tout le code avant le return dans Page (y compris le fetch et le premier console.log) sera exécuté côté serveur, car c'est un appel async qui se fait avant le rendu de la page.
//
// Lorsque tu passes les données récupérées (data) à ton composant Counter, celui-ci sera rendu côté client, et donc tous les console.log dans ce composant seront exécutés dans le navigateur (pas dans le serveur).
//
// Résumé de ce comportement :
//     Code côté serveur (SSR) : Le console.log dans la fonction Page avant le return sera exécuté côté serveur, pendant le rendu côté serveur.
//
//     Code côté client : Le console.log dans le composant Counter sera exécuté côté client, car le composant est un composant client ("use client").
//
//     Pourquoi cela se produit-il ?
//     Next.js 13 (et versions supérieures) utilise une approche hybride de rendu côté serveur (SSR) et côté client (CSR), ce qui signifie que le code dans un composant côté serveur et côté client se comporte différemment :
//
//     SSR : Le rendu se fait côté serveur et les console.log dans ce contexte apparaîtront dans la console du serveur (lors de la génération de la page).
// CSR : Les composants marqués comme use client (ou avec useEffect / useState) sont rendus côté client, et leurs console.log apparaîtront dans la console du navigateur.
//     Solution :
// Côté serveur : Utilise console.log pour déboguer le côté serveur avant que la page soit envoyée au client.
//     Côté client : Utilise console.log dans des composants côté client ou dans des hooks comme useEffect pour suivre le comportement côté client.
//     Cela explique pourquoi tu vois des console.log dans la console du navigateur pour Counter et dans la console du serveur pour la récupération des données avec fetch dans Page.