import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import {Josefin_Sans} from "next/font/google";
import "@/app/_styles/globals.css"

const josefin = Josefin_Sans({
    subsets: ['latin'],
    display: "swap",
})

export const metadata = {
    title: {
        template: "%s / The Wild Hotel",
        default: "Welcome / The Wild Hotel"
    },
    description: "Luxury cabin hotel, located in in the heart fo the Mordore, surrounded by creepy orcs and demons",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
            <Logo/>
            <Navigation/>
        </header>

        <main>{children}</main>
        <footer>Copyright 2024</footer>
        </body>
        </html>
    )
}




// console.log(josefin);
// {
//     style: {
//         fontFamily: "'Josefin Sans', 'Josefin Sans Fallback'",
//             fontStyle: 'normal'
//     },
//     className: '__className_2ad2c0' // ici
// }


// Nous permet de connaitre la classNae que l'on souhaite utiliser si jamais on ne sait pas ou le trouver


