const sitemap = require("nextjs-sitemap-generator");
const path = require("path");
const prettier = require("prettier");
const fs = require("fs");

(async () => {
  try {
    await sitemap({
      baseUrl: "https://kevinpeters.net",
      ignoredPaths: [],
      extraPaths: [],
      pagesDirectory: __dirname + "\\out",
      targetDirectory: "public/",
      sitemapFilename: "sitemap.xml",
      nextConfigPath: __dirname + "\\next.config.js",
      ignoredExtensions: ["png", "jpg"],
      pagesConfig: {
        "/login": {
          priority: "0.5",
          changefreq: "daily",
        },
      },
      sitemapStylesheet: [],
    });

    const sitemapPath = path.resolve(__dirname, "./public", "./sitemap.xml");
    const xmlContent = fs.readFileSync(sitemapPath).toString();
    const result = prettier.format(xmlContent, {
      parser: "xml",
      xmlWhitespaceSensitivity: "ignore",
    });
    fs.writeFileSync(sitemapPath, result);
    console.log(`✅ sitemap.xml generated!`);
  } catch (e) {
    // Deal with the fact the chain failed
  }
})();
