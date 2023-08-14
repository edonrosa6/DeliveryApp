module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            assets: "./src/assets",
            src: "./src",
            components: "./src/app/components",
            data: "./src/app/data",
            screens: "./src/app/screens",
            navigation: "./src/app/navigation",
            themes: "./src/themes",
          },
        },
      ],
    ],
  };
};
