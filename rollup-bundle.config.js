import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default {
  input: `src/index.ts`,
  output: [{ dir: 'out-tsc/src', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash-es')
  external: [],
  plugins: [
    replace({
      'process.env.NODE_ENV': '"production"',
    }),
    typescript({
      outDir: 'out-tsc/src',
    }),
    resolve(),
    commonjs({ include: [] }),
    terser(),
  ],
};
