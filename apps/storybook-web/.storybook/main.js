const path = require("path");

module.exports = {
  stories: ["../src/Button/Button.stories.js", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-formik/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if (plugin.constructor.name === "ESLintWebpackPlugin") {
          return false;
        }
        return true;
      }),
    };
  },
};
