const githubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(githubPages ? { output: 'export', trailingSlash: true } : {}),
  basePath,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: githubPages,
  },
  ...(githubPages ? {} : {
    async headers() {
      return [{
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      }]
    },
  }),
}

export default nextConfig
