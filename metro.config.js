const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
// const { assetExts, sourceExts } = getDefaultConfig(__dirname).resolver;

// Obtain the base Metro configuration
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

// SVG Configure transformer and resolver settings
const svgConfig = {
  transformer: {
    babelTranformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};


const finalConfig = mergeConfig(defaultConfig, svgConfig);

module.exports = withNativeWind(finalConfig, {
  input: './global.css',
});
