var path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'srcjs', 'scoutbar.jsx'),
    output: {
        path: path.join(__dirname, 'inst/www/scoutbar'),
        filename: 'scoutbar.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            // For CSS so that import "path/style.css"; works
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        'shiny': 'window.Shiny',
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'reactR': 'window.reactR'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};