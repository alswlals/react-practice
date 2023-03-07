const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/bundle.js'
    },
    module: {
        rules:[{
            test: /\.(c|sa|sc)ss$/i, 
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }, 
    devServer: {
        host: '0.0.0.0',  /** 접근하는 ip 다 허용 */
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false
    }
}