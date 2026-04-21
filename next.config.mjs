/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const repoName = 'manuelcobos24.github.io'

const nextConfig = {
  output: 'export',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
}

export default nextConfig