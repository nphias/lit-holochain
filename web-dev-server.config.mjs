/*import plugins from './web-dev.plugins.mjs';

export default {
  port: 8080,
  watch: true,
  nodeResolve: {
    browser: true,
  },
  appIndex: './index.html',
  open: true,
  plugins,
};*/


import plugins from './web-dev.plugins.mjs';

export default {
  port: 8080,
  watch: true,
  rootDir: 'dist',
  appIndex: 'index.html',
  open: true
};
