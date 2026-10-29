const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { assetExts, sourceExts } = getDefaultConfig(__dirname).resolver;

const defaultConfig = getDefaultConfig(__dirname);

const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },

  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

const config = mergeConfig(defaultConfig, svgConfig);

module.exports = withNativeWind(config, {
  input: './global.css',
});
