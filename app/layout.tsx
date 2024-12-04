import {Josefin_Sans} from "next/font/google";
import "@/app/_styles/globals.css"
import Header from "@/app/_components/Header";

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
        <Header/>

        <main>{children}</main>
        <footer>Copyright 2024</footer>
        </body>
        </html>
    )
}
