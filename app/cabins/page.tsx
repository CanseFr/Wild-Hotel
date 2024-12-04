import Counter from "@/app/components/Counter";

export default async function Page() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    console.log("Console log dan sle serveur ")


    return <div>
        <h1>Cabins page</h1>
        <ul>{data.map((user: any) => (
            <li key={user.id}>
                <ul>
                    {user.name}
                </ul>
            </li>
        ))}</ul>
        <Counter user={data}/>
    </div>
}



// Ici nous executon une action sur le serveur, donc la page client possedera la data avant de l'envoyer sur le client, on peu le constater avec le console.log, par contre nous appelon un composant enfant Counter
// QUi lui sera a react server component et s'executera sur le navigateur du client grace a "use client"