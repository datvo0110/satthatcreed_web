// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const commonsChunkConfig = require('@shuta/commons-chunk-config');
//
// module.exports = withSass(withCSS({
//   webpack: config => commonsChunkConfig(config, /\.(sass|scss|css)$/)
// }));

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



// module.exports = withCSS(withSass());




const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  // ✅ Put the require call here.
  // const withCSS = require('@zeit/next-css');

  const withSass = require('@zeit/next-sass');
  const withCSS = require('@zeit/next-css');

  return withCSS(withSass());
};