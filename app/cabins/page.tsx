export default async function Page() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    return <div>
        <h1>Cabins page</h1>
        <ul>{data.map((user: any) => (
            <li key={user.id}>
                <ul>
                    {user.name}
                </ul>
            </li>
        ))}</ul>
    </div>
}