module.exports = function (api) {
  api.cache(true);
  const plugins = [
    '@babel/plugin-transform-typescript', 
    // '@babel/plugin-transform-react-jsx', 
  ];

  return {
    presets: ['babel-preset-expo'],

    plugins,
  };
};
