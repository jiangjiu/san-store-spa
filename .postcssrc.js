/**
 * @file postcss-loader config inspired by vue-cli
 * @author jady
 */

// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {
            browsers: [
                'iOS >= 7',
                'Android >= 4.0',
                'ExplorerMobile >= 10',
                'ie >= 9'
            ]
        }
    }
};
