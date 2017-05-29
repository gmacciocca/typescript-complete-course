// For this to work I installed thw following packages:
// npm install --save-dev webpack ts-loader
//

module.exports = {
    entry: "./sourceForWebpack.ts",
    output: {
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};
