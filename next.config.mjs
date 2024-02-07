const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/build-your-own-frame',
                destination: 'https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs',
                permanent: false
            },
            {
                source: '/pinata-account',
                destination: 'https://app.pinata.cloud/register',
                permanent: false
            }
        ]
    }
}

export default nextConfig;