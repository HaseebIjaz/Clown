import fs from "fs";
import path from "path";

const PATCH_NAME = "[patch-vite-plugin-eslint]: ";

const pkgPath = path.resolve(
  process.cwd(),
  "node_modules",
  "vite-plugin-eslint",
  "package.json"
);
console.log({ pkgPath });
try {
  if (!fs.existsSync(pkgPath)) {
    console.error(PATCH_NAME, "vite-plugin-eslint not found.");
  } else {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

    // Add the types export
    if (pkg.exports && pkg.exports["."] && !pkg.exports["."].types) {
      console.log(PATCH_NAME, "Before Patch : ", pkg.exports["."]);
      pkg.exports["."].types = "./dist/index.d.ts";
      console.log(PATCH_NAME, " After Patch : ", pkg.exports["."]);
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      console.log(PATCH_NAME, 'Patched types into exports["."]');
    } else {
      console.log(PATCH_NAME, "Already patched or malformed exports");
    }
  }
} catch (err) {
  console.error(PATCH_NAME, "Failed to patch:", err);
}
