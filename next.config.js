const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  webpack: (config, { isServer }) => {
    // console.log({ config });
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: "empty" };
    }
    return config;
  },
});
