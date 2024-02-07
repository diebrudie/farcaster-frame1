const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/diebrudie-midjourney',
                destination: 'https://playground-isa.webflow.io/interactive/moving-lines',
                permanent: false
            },
            {
                source: '/diebrudie',
                destination: 'https://isabelbruda.xyz/',
                permanent: false
            }
        ]
    }
}

export default nextConfig;