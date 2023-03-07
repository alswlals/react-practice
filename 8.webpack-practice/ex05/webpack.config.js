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
            test: /\.css$/i,   /* css로 끝나는, 대소문자 구분하지 않는 */
            use: ['style-loader', 'css-loader']
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