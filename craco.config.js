
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        buffer: require.resolve('buffer/'),
        assert: require.resolve('assert/'),
      };
      return webpackConfig;
    },
  },
};


