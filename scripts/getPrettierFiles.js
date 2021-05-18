const glob = require("glob");

const getPrettierFiles = () => {
  let files = [];
  const jsFiles = glob.sync("src/**/*.js*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const vueFiles = glob.sync("src/**/*.vue*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const tsFiles = glob.sync("src/**/*.ts*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const configFiles = glob.sync("config/**/*.ts*", {
    ignore: ["**/node_modules/**", "build/**"],
  });
  const scriptFiles = glob.sync("scripts/**/*.ts");
  const scssFiles = glob.sync("src/**/*.scss*", {
    ignore: ["**/node_modules/**", "build/**"],
  });

  files = [...jsFiles, ...tsFiles, ...vueFiles, ...configFiles, ...scriptFiles, ...scssFiles];
  if (!files.length) {
    return;
  }
  return files;
};

module.exports = getPrettierFiles;
