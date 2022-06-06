// rollup.config.js
import vue from 'rollup-plugin-vue'

export default [
  {
    input: 'src/entry.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue()
    ]
  }
]
