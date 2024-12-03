import Navigation from "@/app/components/Navigation";

export default function RootLayout({children}: any) {
    return <html lang="en">
    <body>
    <Navigation/>
    <main>{children}</main>
    </body>
    </html>
}

// Le prop children en React est essentiel pour intégrer le contenu des pages dans une mise en page, permettant de rendre dynamiquement chaque page ou modèle enfant au sein du layout principal, similaire au concept d'Outlet dans React Router.





