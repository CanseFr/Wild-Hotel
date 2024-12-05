import Spinner from "@/app/_components/Spinner";

export default function Loading() {
    return <Spinner/>
}

// https://nextjs.org/docs/app/api-reference/file-conventions/loading
// A loading file can create instant loading states built on Suspense.
// By default, this file is a Server Component - but can also be used as a Client Component through the "use client" directive.
// Loading UI components do not accept any parameters.