import Navigation from "@/app/components/Navigation";

export default function RootLayout() {
    return <html lang="en">
    <body>
    <Navigation/>
    </body>
    </html>
}

// Ici, le root layout renvoie toujours le même élément. Ainsi, je peux cliquer sur n'importe quel lien de redirection, le composant est toujours renvoyé, même si l'URL change.





