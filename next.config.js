const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const commonsChunkConfig = require('@shuta/commons-chunk-config');

module.exports = withSass(withCSS({
  webpack: config => commonsChunkConfig(config, /\.(sass|scss|css)$/)
}));

// module.exports = {
//   webpack: (config, {defaultLoaders}) => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         {
//           loader: 'emit-file-loader',
//           options: {
//             name: 'dist/[path][name].[ext]',
//           },
//         },
//         'babel-loader',
//         'styled-jsx-css-loader',
//       ],
//     })
//
//     return config
//   }
// }
