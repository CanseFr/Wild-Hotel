import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import "@/app/_styles/globals.css"

export const metadata = {
    title: {
        template: "%s / The Wild Hotel",
        default: "Welcome / The Wild Hotel"
    },
    description: "Luxury cabin hotel, located in in the heart fo the Mordore, surrounded by creepy orcs and demons"
}

// La description ici est celle par defaut, si comme dans les autres page je viens overide cette desc comme pour le title par exemple, je pourrais personnaliser la description de chaque page et donc optimiser le SEO


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-primary-950 text-primary-100 min-h-screen">
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






