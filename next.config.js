// Support next plugins
const withPlugins = require('next-compose-plugins')
// Switch image loader to build website statically
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
}

const imageLoaderConfig = {
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'gif'],
  removeOriginalExtension: false,
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
}

module.exports = withPlugins([
  [
    optimizedImages,
    {
      ...nextConfig,
      ...imageLoaderConfig,
    },
  ],
])
