module.exports = {
  presets: ["@babel/preset-env"],
  env: {
    development: {
      presets: [
        ["@vue/babel-preset-app"],
      ],
    },
  },
};
