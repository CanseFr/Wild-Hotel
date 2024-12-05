"use client"

// Doc : https://nextjs.org/docs/app/building-your-application/routing/error-handling

export default function Error({error, reset}: any) {
    return (
        <main className='flex justify-center items-center flex-col gap-6'>
            <h1 className='text-3xl font-semibold'>Une erreur est survenue !</h1>
            <p className='text-lg'>{error.message}</p>

            <button className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg' onClick={reset}>
                Réessayer
            </button>
        </main>
    );
}
