import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    svelte(),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs()
  ],
  watch: {
    clearScreen: false
  }
};
