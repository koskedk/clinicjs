const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "clinicjs",
    projectName: "ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        // {
        //   test: /\.(sa|sc|c)ss$/,
        //   use: ["style-loader", "css-loader", "sass-loader"],
        // },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: ["url-loader?limit=100000"],
        },
      ],
    },
  });
};
