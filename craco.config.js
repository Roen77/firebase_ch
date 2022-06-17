// const CracoAlias = require("craco-alias");

// module.exports = {
//     plugins: [
//         {
//             plugin: CracoAlias,
//             options: {
//                 source: "tsconfig",
//                 baseUrl: "./src",
//                 tsConfigPath: "tsconfig.paths.json",
//             },
//         },
//     ],
// };

const path = require("path/posix");

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@slices": path.resolve(__dirname, "src/slices"),
            "@store": path.resolve(__dirname, "src/store"),
        },
    },
    jest: {},
};
