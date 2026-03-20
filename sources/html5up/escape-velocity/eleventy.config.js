import { readFileSync } from "node:fs";
const site = JSON.parse(readFileSync("./src/_data/site.json", "utf-8"));

export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	eleventyConfig.addPassthroughCopy({
		"src/assets/css": site.url.prefix + site.url.assets + "/css",
		"src/assets/images": site.url.prefix + site.url.assets + "/images",
		"src/assets/js": site.url.prefix + site.url.assets + "/js",
		"src/assets/webfonts": site.url.prefix + site.url.assets + "/webfonts"
	});
}