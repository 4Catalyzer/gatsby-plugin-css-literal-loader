exports.onCreateWebpackConfig = (
  { actions },
  options = { extension: '.module.css' },
) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: require.resolve('css-literal-loader'),
              options,
            },
          ],
        },
      ],
    },
  });
};
