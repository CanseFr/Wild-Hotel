import Navigation from "@/app/components/Navigation";
import Logo from "@/app/components/Logo";

export const metadata = {
    title: "The wild hotel",
}


export default function RootLayout({children}: any) {
    return <html lang="en">
    <body>
    <header>
        <Logo/>
        <Navigation/>
    </header>

    <main>{children}</main>
    <footer>Copyright 2024</footer>
    </body>
    </html>
}






