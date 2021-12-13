import fs from "fs/promises";

async function setPublicPath(publicPath: string) {
  const html = await fs.readFile("./docs/index.html", "utf8");
  const newHtml = html
    .replace(/href="\/index/g, `href="${publicPath}/index`)
    .replace(/href="\/assets/g, `href="${publicPath}/assets`)
    .replace(/src="\/index/g, `src="${publicPath}/index`);
  await fs.writeFile("./docs/index.html", newHtml);

  const docs = await fs.readdir("./docs");
  const indexBundle = docs.filter((file) => file.match(/index\..+\.js$/))[0];
  const js = await fs.readFile(`./docs/${indexBundle}`, "utf8");
  const newJS = js.replace(/"\/assets\//g, `"${publicPath}/assets/`);
  await fs.writeFile(`./docs/${indexBundle}`, newJS);
}

setPublicPath("/playboy");
