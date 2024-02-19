const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    emptyOutDir: true,
    outDir: "dist/public",
  },
  server: {
    port: 8080,
  },
};
