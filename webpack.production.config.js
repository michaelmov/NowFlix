var devConfig = require('./webpack.config');

/*
* Add unique hash to bundles for each build to refresh browser cache
* */
devConfig.output = {
    filename: "bundle.[hash].js"
};

/*
* Remove source maps from production bundles
* */
delete devConfig.devtool;

module.exports = devConfig;