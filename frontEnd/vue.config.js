module.exports = {
    publicPath: '/',
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        proxy: {
           '/api': {
                target: 'http://www.vuethink.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
           }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 75
                    }),
                    require('autoprefixer')
                ]
            }
        }
    }
}