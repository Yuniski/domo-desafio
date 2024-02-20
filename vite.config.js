const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: "../dist/public",
  },
  server: {
    port: 8080,
  },
};
