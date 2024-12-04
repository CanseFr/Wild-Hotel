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
        <Counter />
    </div>
}

