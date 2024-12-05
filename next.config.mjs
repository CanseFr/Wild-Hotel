/** @type {import('next').NextConfig} */


const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**/**',
            },
        ],
    },
    output: "export"
};
export default nextConfig;

// Commande pour un deploiement static, ceci permet de creer un dossier avec tous le neccesaire, juste a placer sur le serveur