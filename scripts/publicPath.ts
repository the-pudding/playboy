import fs from "fs/promises";

async function setPublicPath(publicPath: string) {
  const html = await fs.readFile("./docs/index.html", "utf8");
  const newHtml = html
    .replace(/href="\/index/g, `href="${publicPath}/index`)
    .replace(/href="\/assets/g, `href="${publicPath}/assets`)
    .replace(/src="\/index/g, `src="${publicPath}/index`);

  await fs.writeFile("./docs/index.html", newHtml);
}

setPublicPath("/playboy");
