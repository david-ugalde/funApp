// webpack.config.js
const path = require("path");

module.exports = (env, argv) => {
    return {
        resolve: {
            extensions: ['', 'js', '.jsx']
        },
        entry: {
            app: ['./app.js']
        },
        output: {
            publicPath: '/compiled',
            path: path.resolve(__dirname, './compiled'),
            filename: '[name].build.js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/
                }
            ]
        }
    }
    
};