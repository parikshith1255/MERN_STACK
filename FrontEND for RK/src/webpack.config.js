const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add resolve fallback for 'crypto' and 'stream' modules
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  };

  // Provide the 'process' module
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  );

  return config;
};
