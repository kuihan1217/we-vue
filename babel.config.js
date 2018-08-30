module.exports = function (api) {
  const {BABEL_MODULE, NODE_ENV} = process.env
  const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'

  api && api.cache(false)

  console.log('fuck')

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: useESModules ? false : 'commonjs'
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules
        }
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }
}